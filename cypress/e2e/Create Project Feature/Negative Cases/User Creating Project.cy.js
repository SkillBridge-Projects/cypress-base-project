describe('User Creating Project Feature', () => {
    // Step 1: Login to the site
    it('should log in to the site', () => {
        cy.visit('http://localhost:8080/authenticate'); // Visit the login page
        cy.wait(1000); // Wait for the page to load
  
        cy.get('input[name="email"]').type('anjanadevi@nexzera.in'); // Enter email
        cy.wait(1000); // Wait to ensure input is typed
  
        cy.get('input[name="password"]').type('anjana'); // Enter password
        cy.wait(1000); // Wait to ensure input is typed
  
        cy.get('button[type="submit"]').click(); // Click the login button
        cy.wait(1000); // Wait for login to complete
    });
  
    // Step 2: user Creating a new project 
    it('should create a new project with validation checks', () => {
        cy.get('[data-testid="Navbar:left"]').realHover().and('not.contain', 'Create Project').wait(1000); // Hover over the sidebar to collapse it
        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click on it
        cy.wait(1000); // Wait to ensure logout completes
    });

});