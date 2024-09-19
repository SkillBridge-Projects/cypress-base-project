describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Step 1: Login
        cy.visit('http://localhost:8080/authenticate'); // Navigate to login page
        cy.get('[data-testid="form-field:email"]').type('anjanadevi@nexzera.in'); // Enter email
        cy.get('[data-testid="form-field:password"]').type('anjana'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click login button

        cy.wait(1000); // Wait to ensure login completes
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse sidebar

        cy.wait(1000); // Wait to ensure sidebar collapses
    });

    it('should click Create button', () => {
        // Step 3: Click Create button
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open create issue form

        cy.wait(1000); // Wait to ensure form opens
    });

    it('should create issue without filling any fields', () => {
        // Step 4: Attempt to create issue without filling fields
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Click create issue button

        cy.wait(500); // Wait to observe error messages
        cy.get('[data-testid="form-field:title"]').should('be.visible').and('contain', 'This field is required'); // Verify required field error message

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Click cancel to close form

        cy.wait(1000); // Wait to ensure cancellation completes
    });

    after(() => {
        // Step 5: Logout
        cy.get('[data-testid="Navbar:left"]') // Ensure sidebar is visible
            .realHover() // Hover over the sidebar to reveal options
            .wait(1000);

        cy.get('[data-testid="Navbar:logout"]') // Hover over and click logout button
            .realHover() 
            .click();

        cy.wait(1000); // Wait to ensure logout completes
    });
});
