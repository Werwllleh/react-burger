
describe('page constructor tests', () => {
    beforeEach(() => {
        cy.intercept("GET", "api/auth/user", {fixture: "user.json"});
        cy.intercept("POST", "api/orders", {fixture: "order.json"}).as("postOrder");

        // Устанавливаем токены:
        window.localStorage.setItem(
            "accessToken",
            JSON.stringify("test-accessToken")
        );
        window.localStorage.setItem(
            "refreshToken",
            JSON.stringify("test-refreshToken")
        );
        cy.visit('http://localhost:3000/');
        cy.intercept("GET", "api/ingredients", {fixture: "ingredientsData.json"});
    });

    it('should open & close ingredient modal', () => {
        cy.get("[data-testid='Филе Люминесцентного тетраодонтимформа']").click();
        cy.get("[data-testid='modal-title']").should(
            "have.text",
            "Детали ингредиента"
        );
        cy.get("[data-testid='close-modal-btn']").click();
        cy.get("[data-testid='constructor-page-title']").should(
            "have.text",
            "Соберите бургер"
        );
    });

    it('should DnD ingredients and order burger', () => {
        cy.get("[data-testid='Краторная булка N-200i']").trigger("dragstart");
        cy.get("[data-testid=drop-zone]").trigger("drop");
        cy.get("[data-testid='Краторная булка N-200i count']").should(
            "have.text",
            "1"
        );
        cy.get("[data-testid='Филе Люминесцентного тетраодонтимформа']").trigger("dragstart");
        cy.get("[data-testid=drop-zone]").trigger("drop");
        cy.get("[data-testid='Филе Люминесцентного тетраодонтимформа']").trigger("dragstart");
        cy.get("[data-testid=drop-zone]").trigger("drop");
        cy.get("[data-testid='Филе Люминесцентного тетраодонтимформа count']").should(
            "have.text",
            "2"
        );
        cy.get("[data-testid=drop-zone]").contains("Краторная булка N-200i");
        cy.get("[data-testid='order'] .btn-order").click();
        cy.get("[data-testid='order-number']").should(
            "have.text",
            "7777"
        );
    });

})