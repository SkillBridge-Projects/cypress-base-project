describe('Create Project Feature and Validation', () => {
    // Step 1: Log in to the site
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

    // Step 2: Navigate to the create project form
    it('should navigate to the create project form', () => {
        cy.get('[data-testid="Navbar:left"]').realHover().wait(1000); // Hover over the sidebar to open it
        cy.get('[data-testid="Navbar:create-project"]').realHover().click(); // Click on the create project option
        cy.wait(1000); // Wait for the create project form to appear
    });

    // Step 3: Attempt to save the project without filling required fields
    it('should show validation errors when fields are not filled', () => {
        cy.get('[data-testid="create project:Name"]').click().type('QA Project'); // Enter the project name
        cy.get('[data-testid="create project:URL"]').type('https://example.com'); // Enter the project URL
        cy.get('[data-testid="create project:Create"]').click().wait(1000); // Click on the create button

        // Check validation errors for required fields
        cy.get('[data-testid="form-field:category"]').should('be.visible').and('contain', 'This field is required');
        cy.get('[data-testid="create project:Cancel"]').click().wait(1000); // Cancel the form
    });

    // Step 4: Logout
    it('should log out of the site', () => {
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible

        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to open it
        cy.wait(1000); // Wait to ensure hover effect completes

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click on it
        cy.wait(1000); // Wait to ensure logout completes
    });
});

  