class RegistrationForm {
    elements = {
        nameField: () => cy.get('#signupName'),
        lastNameField: () => cy.get('#signupLastName'),
        emailField: () => cy.get('#signupEmail'),
        passwordField: () => cy.get('#signupPassword'),
        repeatPasswordFiled: () => cy.get('#signupRepeatPassword'),
        registerBtn: () => cy.get('.btn-primary'),
    };

    fillRegistrationForm(){
        this.elements.nameField().type('Kateryna');
        this.elements.lastNameField().type('Test');
        this.elements.emailField().type('ktesttest1457@gmail.com');
        this.elements.passwordField().type('145711');
        this.elements.repeatPasswordFiled().type('145711');
        this.elements.registerBtn().click();
    }

    getNavigationMenuElements(){
        this.elements.homeBtn().should('be.visible');
        this.elements.aboutBtn().should('be.visible');
        this.elements.ContactsBtn().should('be.visible');
    }

    getGuestLoginBtnElement(){
        this.elements.guestLoginBtn().should('be.visible');
    }

    getSignInBtnElement(){
        this.elements.signInBtn().should('be.visible');
    }

    getSignUpBtnElement(){
        this.elements.signUpBtn().should('be.visible');
    }
}

export const registrationFormModal = new RegistrationForm()









