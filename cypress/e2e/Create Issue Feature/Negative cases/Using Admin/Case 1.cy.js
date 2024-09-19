describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Step 1: Log in
        cy.visit('http://localhost:8080/authenticate'); // Visit the login page
        cy.get('[data-testid="form-field:email"]').type('test@mail.com'); // Enter the email
        cy.get('[data-testid="form-field:password"]').type('test'); // Enter the password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click the login button
        cy.wait(1000); // Wait for the login to complete
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse the sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click the collapse button
        cy.wait(1000); // Wait for the sidebar to collapse
    });

    it('should click Create button', () => {
        // Step 3: Click the Create button
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click the create issue button
        cy.wait(1000); // Wait for the create issue form to open
    });

    it('should create issue without filling any fields', () => {
        // Step 4: Attempt to create an issue without filling any fields
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Click the create issue button without filling fields
        cy.wait(500); // Wait to observe any error messages
        cy.get('[data-testid="form-field:title"]').should('be.visible').and('contain', 'This field is required'); // Verify error message for the title field

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Cancel issue creation
        cy.wait(1000); // Wait for the cancellation to complete
    });

    after(() => {
        // Step 5: Log out
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure the sidebar is visible
        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to open it
        cy.wait(1000); // Wait for the hover effect to complete

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click to log out
        cy.wait(1000); // Wait for the logout to complete
    });
});
