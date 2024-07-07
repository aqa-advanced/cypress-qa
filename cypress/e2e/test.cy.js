import { headerMenu } from '../../pages/header-menu';
import {footerMenu} from "../../pages/footer-menu";


describe('Check header and footer elements', () => {
  it('', () => {
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
    headerMenu.getHeaderLogoElement();
    headerMenu.getNavigationMenuElements();
    headerMenu.getGuestLoginBtnElement();
    headerMenu.getSignInBtnElement();
    headerMenu.getSignUpBtnElement();
    footerMenu.getSocialLinksFromContactsBlock();
    footerMenu.getContactsLink();
    footerMenu.getEmailLink();
  })
})