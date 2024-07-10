
class LoginFormModal {
    elements = {
        emailField: () => cy.get('#signinEmail'),
        passwordField: () => cy.get('#signinPassword'),
        rememberCheckbox: () => cy.get('#remember'),
        loginBtn: () => cy.get('.modal-footer .btn-primary'),
    };

    logIn(registrationData){
        this.elements.emailField().type(registrationData.email);
        this.elements.passwordField().type(registrationData.password);
        this.elements.rememberCheckbox().click();
        this.elements.loginBtn().click();
    }
}

export const loginFormModal = new LoginFormModal()









