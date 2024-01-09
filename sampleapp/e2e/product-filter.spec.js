
it("filter product", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[placeholder="search by name"]')
    .type("HDMI")
    .get('.card')
    .then(rows => {
        expect(rows.length).to.eq(1);
    })
})