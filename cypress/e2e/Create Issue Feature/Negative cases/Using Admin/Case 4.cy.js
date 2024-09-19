describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Step 1: Log in to the application
        cy.visit('http://localhost:8080/authenticate'); // Navigate to the login page
        cy.get('[data-testid="form-field:email"]').type('test@mail.com'); // Enter email
        cy.get('[data-testid="form-field:password"]').type('test'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click the login button
        cy.wait(1000); // Wait for login to complete
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse the sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse the sidebar
        cy.wait(1000); // Wait for the sidebar to collapse
    });

    it('should click Create button', () => {
        // Step 3: Click the Create button
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open the issue creation form
        cy.wait(1000); // Wait for the form to open
    });

    it('should create issue by filling the first field', () => {
        // Step 4: Create an issue by filling the required fields and submitting
        cy.get('[data-testid="select:type"]').click() // Open the issue type dropdown
            .parent() // Navigate to dropdown's parent
            .find('div') // Locate dropdown items
            .contains('Bug') // Select 'Bug' from the dropdown
            .click();
        cy.wait(1000);

        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); // Enter issue summary
        cy.get('[data-testid="form-field:description"]').type('1234@#$ Working on negative cases about how to create a task functionality.'); // Enter issue description
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Attempt to create the issue
        cy.wait(500); // Wait to observe any error messages

        // Verify error message for invalid input
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div")
            .should('be.visible')
            .and('contain', 'Something went wrong, please contact our support.');

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Cancel issue creation
        cy.wait(1000); // Wait for cancellation to complete
    });

    after(() => {
        // Step 5: Log out of the application
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible

        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to reveal options
        cy.wait(1000); // Wait for hover effect to complete

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over and click the logout button
        cy.wait(1000); // Wait for logout to complete
    });
});
