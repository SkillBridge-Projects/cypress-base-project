describe('Create Project Feature and Validation', () => {
  
    // Step 1: Log in to the application
    it('should log in to the application successfully', () => {
        cy.visit('http://localhost:8080/authenticate'); // Navigate to the login page
        cy.wait(1000); // Wait for the page to fully load
  
        cy.get('input[name="email"]').type('test@mail.com'); // Enter email address
        cy.wait(1000); // Wait for the email input to be processed
  
        cy.get('input[name="password"]').type('test'); // Enter password
        cy.wait(1000); // Wait for the password input to be processed
  
        cy.get('button[type="submit"]').click(); // Submit the login form
        cy.wait(1000); // Wait for the login process to complete
    });
  
    // Step 2: Open the "Create Project" form
    it('should open the create project form', () => {
        cy.get('[data-testid="Navbar:left"]').realHover().wait(1000); // Hover over the sidebar to reveal options
        cy.get('[data-testid="Navbar:create-project"]').realHover().click(); // Click on the "Create Project" option
        cy.wait(1000); // Wait for the create project form to load
    });
  
    // Step 3: Attempt to create a project and check validation for required fields
    it('should show validation errors when creating a project with missing required fields', () => {
        cy.get('[data-testid="create project:Name"]').click().type('@1234QA'); // Enter a project name
        cy.get('[data-testid="create project:Create"]').click().wait(1000); // Attempt to create the project with incomplete details
        
        // Verify validation errors for missing required fields
        cy.get('[data-testid="form-field:category"]').should('be.visible').and('contain', 'This field is required');
        
        // Cancel the project creation form
        cy.get('[data-testid="create project:Cancel"]').click().wait(1000); // Click the cancel button
    });
  
    // Step 4: Log out from the application
    it('should log out from the application successfully', () => {
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible
  
        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar
        cy.wait(1000); // Wait for hover effect to complete
  
        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Click the logout button
        cy.wait(1000); // Wait for the logout process to complete
    });
  
  });
  