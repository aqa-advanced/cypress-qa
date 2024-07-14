import { headerMenu } from '../../pages/header-menu';
import {footerMenu} from "../../pages/footer-menu";
import {registrationFormModal} from "../../pages/registration-form";
import {personalArea} from "../../pages/personal-area";
import {getRegistrationData} from "../fixtures/registrationData";
import {loginFormModal} from "../../pages/login-form";


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

  describe('Check registration form -> positive test', () => {
    it('should successfully register a new user with valid details', () => {
      cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
      headerMenu.clickOnSignupBtn();
      const registrationData = getRegistrationData();
      registrationFormModal.fillRegistrationForm(registrationData);
      registrationFormModal.clickOnRegisterBtn();
      personalArea.profileBtnIsVisible();
      personalArea.clickOnLogOut();
      headerMenu.clickOnSignInBtn();
      loginFormModal.logInAsExistCustomer(registrationData);
    })

    describe('Registration form -> check validation errors', () => {
      it('should successfully register a new user and check validation errors', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
        headerMenu.clickOnSignupBtn();
        registrationFormModal.checkRegistrationBtnIsDisabled();
        const registrationData = getRegistrationData();
        registrationFormModal.checkNameField(registrationData);
        registrationFormModal.checkLastNameField(registrationData);
        registrationFormModal.checkEmailField(registrationData);
        registrationFormModal.checkPasswordFields(registrationData);
        registrationFormModal.clickOnRegisterBtn();
        personalArea.clickOnLogOut();
        headerMenu.clickOnSignInBtn();
        loginFormModal.logInAsExistCustomer(registrationData);
      })
    })

    describe('Log in as exist customer', () => {
      it('add a new car', () => {
        cy.visit('/');
        headerMenu.clickOnSignInBtn();
        loginFormModal.logInAsExistCustomer();
        headerMenu.isLoginSuccess();
      })
    })
})})