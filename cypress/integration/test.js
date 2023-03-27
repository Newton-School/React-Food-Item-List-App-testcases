describe("Food List App", () => {
	it("displays an empty list of foods initially", () => {
		cy.visit("http://localhost:3000/");
		cy.get(".list").should("be.empty");
	});

	it("displays a form to add a new food item when 'Add Food' is clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("Add Food").click();
		cy.get("input[name='itemName']").should("exist");
		cy.get("input[name='foodType']").should("exist");
		cy.get("input[name='spicinessLevel']").should("exist");
	});

	it("displays the spiciness level input when the form is clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("Add Food").click();
		cy.get("form").click();
		cy.get("input[name='spicinessLevel']").should("exist");
	});

	it("adds a new food item to the list when 'Save' is clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("Add Food").click();
		cy.get("input[name='itemName']").type("Pizza");
		cy.get("input[name='foodType']").type("Italian");
		cy.get("form").click();
		cy.get("input[name='spicinessLevel']").type("Mild");
		cy.contains("Save").click();
		cy.get(".list li").should("have.length", 1);
		cy.contains("Pizza (Italian) - Spiciness Level: Mild").should("exist");
	});

	it("deletes a food item from the list when 'Delete' is clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("Add Food").click();
		cy.get("input[name='itemName']").type("Pizza");
		cy.get("input[name='foodType']").type("Italian");
		cy.get("form").click();
		cy.get("input[name='spicinessLevel']").type("Mild");
		cy.contains("Save").click();
		cy.get(".list li").should("have.length", 1);
		cy.contains("Delete").click();
		cy.get(".list").should("be.empty");
	});
	it("Form is not visible when 'Add Food' button is clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.get("form").should("not.exist");
		cy.get("button").contains("Add Food").click();
		cy.get("form").should("be.visible");
	});

	it("Form opacity changes when clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("Add Food").click();
		cy.get("form").should("have.css", "opacity", "0.5");
		cy.get("form").click();
		cy.get("form").should("have.css", "opacity", "1");
	});
});
