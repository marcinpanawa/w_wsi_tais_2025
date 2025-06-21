describe('Test komponentu Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/counter'); 
  });

  it('powinien wyświetlać początkową wartość 0', () => {
    cy.contains('Licznik: 0').should('exist');
  });

  it('powinien zwiększać wartość po kliknięciu przycisku "Zwiększ"', () => {
    cy.contains('Zwiększ').click();
    cy.contains('Licznik: 1').should('exist');
  });

  it('powinien zmniejszać wartość po kliknięciu przycisku "Zmniejsz"', () => {
    cy.contains('Zwiększ').click();
    cy.contains('Zwiększ').click(); // Licznik: 2
    cy.contains('Zmniejsz').click();
    cy.contains('Licznik: 1').should('exist');
  });

  it('powinien resetować wartość po kliknięciu przycisku "Reset"', () => {
    cy.contains('Zwiększ').click();
    cy.contains('Zwiększ').click();
    cy.contains('Zwiększ').click(); // Licznik: 3
    
    cy.contains('Reset').click();
    cy.contains('Licznik: 0').should('exist');
  });
});