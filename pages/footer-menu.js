class FooterMenu {
    elements = {
        facebookLink: () => cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]'),
        telegramLink: () => cy.get('a[href="https://t.me/ithillel_kyiv"]'),
        youtubeLink: () => cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]'),
        instagramLink: () => cy.get('a[href="https://www.instagram.com/hillel_itschool/"]'),
        linkedinLink: () => cy.get('a[href="https://www.linkedin.com/school/ithillel/"]'),
        contactsLink: () => cy.get('.contacts_link.display-4'),
        emailLink: () => cy.get('.contacts_link.h4'),
    };

    getSocialLinksFromContactsBlock(){
        this.elements.facebookLink().should('be.visible');
        this.elements.telegramLink().should('be.visible');
        this.elements.youtubeLink().should('be.visible');
        this.elements.instagramLink().should('be.visible');
        this.elements.linkedinLink().should('be.visible');
    }

    getContactsLink(){
        this.elements.contactsLink().should('be.visible');
    }

    getEmailLink(){
        this.elements.emailLink().should('be.visible');
    }
}

export const footerMenu = new FooterMenu()









