class FuelExpensesPage {
    elements = {
        editBtn: () => cy.get('.btn-edit'),
        deleteBtn: () => cy.get('.btn-delete'),
        milleageInput: () => cy.get('#addExpenseMileage'),
        saveBtn: () => cy.get('.modal-footer .btn-primary'),
        removeBtn: () => cy.get('.modal-footer .btn-danger'),
        emptyPanel: () => cy.get('.panel-page_empty'),
        milleage: () => cy.get('div.expenses_table-wrapper > table > tbody > tr > td:nth-child(2)'),
    };

    editFuelExpenses(liters){
        this.elements.editBtn().click({force:true});
        this.elements.milleageInput().clear();
        this.elements.milleageInput().type(liters);
        this.elements.saveBtn().click();
        this.elements.milleage().should("have.text", liters);
    }

    deleteFuelExpenses(){
        this.elements.deleteBtn().click({force:true});
        this.elements.removeBtn().click();
        this.isFuelExpensesEmpty();
    }

    isFuelExpensesEmpty(){
    this.elements.emptyPanel().should("be.visible");
    }
}

export const fuelExpensesPage = new FuelExpensesPage()









