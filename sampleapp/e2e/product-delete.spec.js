
it("delete product", () => {
    cy.visit("http://localhost:3000");
    cy.get('button')
    .eq(2)
    .click()
    .get('.card')
    .then(rows => {
        expect(rows.length).to.eq(4);
    })
})