import { headerMenu } from '../../pages/header-menu';
import {registrationFormModal} from "../../pages/registration-form";



describe('Check registration form', () => {
    it('', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
        headerMenu.clickOnSignupBtn();
        registrationFormModal.fillRegistrationForm();

    })
})