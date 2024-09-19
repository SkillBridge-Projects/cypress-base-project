describe('Create Project Feature and Validation', () => {
  
    // Step 1: Login to the site
    it('should log in to the site', () => {
        cy.visit('http://localhost:8080/authenticate'); // Visit the login page
        cy.wait(1000); // Wait for the page to load
  
        cy.get('input[name="email"]').type('test@mail.com'); // Enter email
        cy.wait(1000); // Wait to ensure input is typed
  
        cy.get('input[name="password"]').type('test'); // Enter password
        cy.wait(1000); // Wait to ensure input is typed
  
        cy.get('button[type="submit"]').click(); // Click the login button
        cy.wait(1000); // Wait for login to complete
    });
  
    // Step 2: Open the "Create Project" form
    it('should open the create project form', () => {
        cy.get('[data-testid="Navbar:left"]').realHover().wait(1000); // Hover over the sidebar to reveal options
        cy.get('[data-testid="Navbar:create-project"]').realHover().click(); // Click on the "Create Project" option
        cy.wait(1000); // Wait for the form to appear
    });
  
    // Step 3: Attempt to create a project without filling in required fields and verify validation messages
    it('should display validation errors when required fields are missing', () => {
        cy.get('[data-testid="create project:Create"]').click(); // Click on the create button without filling the form
        cy.wait(1000); // Wait for the validation messages to appear
  
        // Verify that validation messages for required fields are displayed
        cy.get('[data-testid="form-field:name"]').should('be.visible').and('contain', 'This field is required');
        cy.get('[data-testid="form-field:category"]').should('be.visible').and('contain', 'This field is required');
  
        // Cancel the project creation form
        cy.get('[data-testid="create project:Cancel"]').click().wait(1000); // Click the cancel button
    });
  
    // Step 4: Logout from the application
    it('should log out from the application', () => {
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible
  
        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar
        cy.wait(1000); // Wait to ensure hover effect completes
  
        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click it
        cy.wait(1000); // Wait to ensure logout completes
    });
  
  });
  