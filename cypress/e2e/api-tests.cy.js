import {garagePage} from "../../pages/garage.page";
import {headerMenu} from "../../pages/header-menu";
import {getRegistrationData} from "../fixtures/registrationData";
import {registrationFormModal} from "../../pages/registration-form";

describe('Garage Page', () => {
    it('checking for adding a new car', () => {
        cy.visit('/');
        headerMenu.clickOnSignupBtn();
        const registrationData = getRegistrationData();
        registrationFormModal.fillRegistrationForm(registrationData);
        registrationFormModal.clickOnRegisterBtn();
        cy.intercept('POST', '/api/cars').as('addCarRequest');
        garagePage.addCar('BMW', 'X5', '100');

        const carBrandId = 2;
        const carModelId = 8;
        const mileage = 100;
        cy.wait('@addCarRequest').its('request.body').should((body) => {
            expect(body).to.have.property('carBrandId', carBrandId);
            expect(body).to.have.property('carModelId', carModelId);
            expect(body).to.have.property('mileage', mileage);
        });
        const carNameTitle = 'BMW X5';
        garagePage.elements.carNameTitle().should("have.text", carNameTitle);
    });

    describe('JSONPlaceholder API Tests', () => {
        const baseUrl = 'https://jsonplaceholder.typicode.com';
        const id = 3;

        it('get post by id', () => {
            cy.request(`${baseUrl}/posts/${id}`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', 3);
                expect(response.body).to.have.property('userId', 1);
                expect(response.body).to.have.property('title');
                expect(response.body).to.have.property('body');
            });
        });

        it('get posts list', () => {
            cy.request(`${baseUrl}/posts`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.length).to.be.greaterThan(0);
                const firstPost = response.body[0];
                expect(firstPost).to.have.property('id',1)
                expect(firstPost).to.have.property('userId',1)
                expect(firstPost).to.have.property('title')
                expect(firstPost).to.have.property('body')
            });
        });

        it('create new post', () => {
            const newPost = {
                title: 'newTitle',
                body: 'newBody',
                userId: 1
            };
                cy.request({
                method: 'POST',
                url: `${baseUrl}/posts`,
                body: newPost
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('title', newPost.title);
                expect(response.body).to.have.property('body', newPost.body);
                expect(response.body).to.have.property('userId', newPost.userId);
                expect(response.body).to.have.property('id');
            });

        it('update post by id', () => {
            const updatedPost = {
                id: 1,
                title: 'updated title',
                body: 'updated body',
                userId: 1
            };
            cy.request({
                method: 'PUT',
                url: `${baseUrl}/posts/1`,
                body: updatedPost
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.equal(updatedPost);
        });

        it('delete post by id', () => {
            cy.request({
                method: 'DELETE',
                url: `${baseUrl}/posts/1`
            }).then((response) => {
                expect(response.status).to.eq(200);
            console.log(response)
            });
        });
    });
        });
    });
});
