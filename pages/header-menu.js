class HeaderMenu {
    elements = {
        headerLogo: () => cy.get('.header_logo'),
        homeBtn: () => cy.get('.header_nav .-active'),
        aboutBtn: () => cy.get('button[appscrollto="aboutSection"]'),
        ContactsBtn: () => cy.get('button[appscrollto="contactsSection"]'),
        guestLoginBtn: () => cy.get('.-guest'),
        signInBtn: () => cy.get('.header_signin'),
        signUpBtn: () => cy.get('.hero-descriptor_btn'),
    };

    getHeaderLogoElement(){
        this.elements.headerLogo().should('be.visible');
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

    clickOnSignupBtn(){
        this.elements.signUpBtn().click();
    }
}

export const headerMenu = new HeaderMenu()









