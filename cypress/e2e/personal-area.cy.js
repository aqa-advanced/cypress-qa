import {headerMenu} from "../../pages/header-menu";
import {garagePage} from "../../pages/garage.page";
import {getRegistrationData} from "../fixtures/registrationData";
import {registrationFormModal} from "../../pages/registration-form";
import {fuelExpensesPage} from "../../pages/fuel-expenses.page";

describe('Add car and fuel expense', () => {
    beforeEach(() => {
        cy.visit('/');
        headerMenu.clickOnSignupBtn();
        const registrationData = getRegistrationData();
        registrationFormModal.fillRegistrationForm(registrationData);
        registrationFormModal.clickOnRegisterBtn();
    });

    it('checking for adding a new car', () => {
        garagePage.addCar('BMW','X5', '100');
        garagePage.removeCar();
    })
    it('checking for adding a fuel expense', () => {
        garagePage.addCar('Ford','Focus', '500');
        garagePage.addFuelExpense('100','100');
        fuelExpensesPage.editFuelExpenses('600');
        fuelExpensesPage.deleteFuelExpenses();
    })
})