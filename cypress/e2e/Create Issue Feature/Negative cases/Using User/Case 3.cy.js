describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Step 1: Navigate to login page and perform login
        cy.visit('http://localhost:8080/authenticate'); // Access the login page
        cy.get('[data-testid="form-field:email"]').type('anjanadevi@nexzera.in'); // Enter email
        cy.get('[data-testid="form-field:password"]').type('anjana'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click login button

        cy.wait(1000); // Wait for login to complete
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse the sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse sidebar

        cy.wait(1000); // Wait for the sidebar to collapse
    });

    it('should click Create button', () => {
        // Step 3: Click the Create button to open the issue form
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open create issue form

        cy.wait(1000); // Wait for the form to open
    });

    it('should create issue by filling first field', () => {
        // Step 4: Create an issue and verify error handling
        cy.get('[data-testid="select:type"]').click() // Open issue type dropdown
        .parent() // Navigate to the dropdown's parent
        .find('div') // Locate divs inside the dropdown
        .contains('Bug') // Select 'Bug' from the dropdown
        .click()
        .wait(1000);

        cy.get('[data-testid="Issue Create:short-summary"]').type('$12345@'); // Enter issue summary
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Attempt to create the issue
        cy.wait(500); // Wait for error message

        // Verify that an error message is displayed
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should('be.visible').and('contain', 'Something went wrong, please contact our support.');

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Cancel the form

        cy.wait(1000); // Wait for cancellation to complete
    });

    after(() => {
        // Step 5: Logout from the application
        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to open it
        cy.wait(1000);

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over and click logout

        cy.wait(1000); // Wait for logout to complete
    });
});
