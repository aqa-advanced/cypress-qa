
class LoginFormModal {
    elements = {
        emailField: () => cy.get('#signinEmail'),
        passwordField: () => cy.get('#signinPassword'),
        rememberCheckbox: () => cy.get('#remember'),
        loginBtn: () => cy.get('.modal-footer .btn-primary'),
    };

    logInAsExistCustomer(){
        this.elements.emailField().type(Cypress.env('login'));
        this.elements.passwordField().type(Cypress.env('password'));
        this.elements.rememberCheckbox().click();
        this.elements.loginBtn().click();
    }
}

export const loginFormModal = new LoginFormModal()









