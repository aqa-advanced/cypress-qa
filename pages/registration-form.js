
class RegistrationFormModal {
    elements = {
        nameField: () => cy.get('#signupName'),
        lastNameField: () => cy.get('#signupLastName'),
        emailField: () => cy.get('#signupEmail'),
        passwordField: () => cy.get('#signupPassword'),
        repeatPasswordFiled: () => cy.get('#signupRepeatPassword'),
        registerBtn: () => cy.get('.modal-footer .btn-primary'),
        invalidFeedback: () => cy.get('.invalid-feedback'),
    };

    fillRegistrationForm(registrationData){
        this.elements.nameField().type(registrationData.name.trim());
        this.elements.lastNameField().type(registrationData.last_name.trim());
        this.elements.emailField().type(registrationData.email);
        // as for me, - better to use -> { log: false }
        // for ex -> this.elements.passwordField().type(registrationData.password, { log: false });
        this.elements.passwordField().type(registrationData.password, { sensitive: true });
        this.elements.repeatPasswordFiled().type(registrationData.password, { sensitive: true });
        this.elements.registerBtn().click();
    }

    checkNameField(registrationData){
        this.elements.nameField().type('123');
        this.elements.lastNameField().type('Test');
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Name is invalid');
        this.elements.nameField().clear();
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Name required');
        this.elements.nameField().type('k');
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Name has to be from 2 to 20 characters long');
        this.elements.nameField().clear();
        this.elements.nameField().type(registrationData.name);
    }

    checkLastNameField(registrationData){
        this.elements.lastNameField().type('123');
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Last name is invalid');
        this.elements.lastNameField().clear();
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Last name required');
        this.elements.lastNameField().type('k');
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Last name has to be from 2 to 20 characters long');
        this.elements.lastNameField().clear();
        this.elements.lastNameField().type(registrationData.last_name);
    }

    checkEmailField(registrationData){
        this.elements.emailField().type('123');
        this.elements.lastNameField().click();
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Email is incorrect');
        this.elements.emailField().clear();
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Email required');
        this.elements.emailField().type(registrationData.email);
    }

    checkPasswordFields(registrationData){
        this.elements.passwordField().type('145Ktest');
        this.elements.repeatPasswordFiled().type(registrationData.password);
        this.elements.passwordField().click();
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('have.text','Passwords do not match');
        this.elements.passwordField().clear();
        this.elements.passwordField().type(registrationData.password);
        this.elements.passwordField().clear();
        this.elements.passwordField().type('2332');
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('contain.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        this.elements.passwordField().clear();
        this.elements.invalidFeedback().should('have.css', 'color', 'rgb(220, 53, 69)').and('contain.text','Password required');
        this.elements.repeatPasswordFiled().clear();
        this.elements.passwordField().type(registrationData.password);
        this.elements.repeatPasswordFiled().type(registrationData.password);
    }

    clickOnRegisterBtn(){
        this.elements.registerBtn().should("not.be.disabled");
        this.elements.registerBtn().click();
    }

    checkRegistrationBtnIsDisabled(){
        this.elements.registerBtn().should("be.disabled");
    }
}

export const registrationFormModal = new RegistrationFormModal()









