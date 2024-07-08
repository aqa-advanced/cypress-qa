class PersonalArea {
    elements = {
        profileBtn: () => cy.get('#userNavDropdown'),
        logOutBtn: () => cy.get('.text-danger'),
    };

    profileBtnIsVisible(){
        this.elements.profileBtn().should('be.visible');
    }

    clickOnLogOut(){
        this.elements.logOutBtn().click();
    }
}

export const personalArea = new PersonalArea()









