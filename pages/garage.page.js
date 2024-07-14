class GaragePage {
    elements = {
        addCarBtn: () => cy.get('.panel-page_heading .btn-primary'),
        brandSelect: () => cy.get('#addCarBrand'),
        modelSelect: () => cy.get('#addCarModel'),
        mileageInput: () => cy.get('#addCarMileage'),
        addBtn: () => cy.get('.modal-footer .btn-primary'),
        editCarBtn: () => cy.get('.car_edit'),
        carNameTitle: () => cy.get('.car_name'),
        removeCarBtn: () => cy.get('.btn-outline-danger'),
        confirmRemoveCarBtn: () => cy.get('.modal-footer .btn-danger'),
        emptyPanel: () => cy.get('.panel-page_empty'),
        fuelExpenseBtn: () => cy.get('.car_add-expense'),
        expenseLitersInput: () => cy.get('#addExpenseLiters'),
        totalcostInput: () => cy.get('#addExpenseTotalCost'),
        expenseMileageInput: () => cy.get('#addExpenseMileage'),
        pageTitle: () => cy.get('.panel-page_heading'),
    };

    addCar(brand, model, year){
        this.elements.addCarBtn().click();
        this.elements.brandSelect().select(brand);
        this.elements.modelSelect().select(model);
        this.elements.mileageInput().type(year);
        this.elements.addBtn().click();
        const carNameTitle = brand + ' ' + model;
        this.elements.carNameTitle().should("have.text", carNameTitle);
    }

    removeCar(){
        this.elements.editCarBtn().click();
        this.elements.removeCarBtn().click();
        this.elements.confirmRemoveCarBtn().click();
        this.isGarageEmpty();
    }

    isGarageEmpty(){
        this.elements.emptyPanel().should("be.visible");
    }

    addFuelExpense(liters,cost){
        this.elements.fuelExpenseBtn().click();
        this.elements.expenseMileageInput().clear();
        this.elements.expenseMileageInput().type('700');
        this.elements.expenseLitersInput().type(liters);
        this.elements.totalcostInput().type(cost);
        this.elements.addBtn().click();
        this.elements.pageTitle().should("contain.text",'Fuel expenses');
    }
}

export const garagePage = new GaragePage()









