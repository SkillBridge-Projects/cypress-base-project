describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Step 1: Log in to the application
        cy.visit('http://localhost:8080/authenticate'); // Navigate to the login page
        cy.get('[data-testid="form-field:email"]').type('anjanadevi@nexzera.in'); // Enter email
        cy.get('[data-testid="form-field:password"]').type('anjana'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click the login button

        cy.wait(1000); // Wait to ensure login completes
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse the sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click the sidebar collapse button

        cy.wait(1000); // Wait to ensure the sidebar collapses
    });

    it('should click Create button', () => {
        // Step 3: Click the Create button
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click the Create button to open the issue creation form

        cy.wait(1000); // Wait to ensure the form opens
    });

    it('should create issue by filling first field', () => {
        // Step 4: Select issue type
        cy.get('[data-testid="select:type"]').click()
        .parent() // Locate the dropdown's parent
        .find('div') // Find divs inside the dropdown
        .contains('Bug') // Select 'Bug'
        .click()
        .wait(1000);
        
        // Step 5: Enter issue summary
        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); 

        // Step 6: Enter issue description
        cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.'); 

        // Step 7: Verify reporter dropdown
        cy.get('[data-testid="select:reporterId"]').realHover().should('contain', 'test'); 

        // Step 8: Attempt to create issue and check for error
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Click the Create issue button
        cy.wait(500); // Wait for the error message
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should('be.visible').and('contain', 'Something went wrong, please contact our support.'); // Verify error message

        // Cancel the form
        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Click the Cancel button

        cy.wait(1000); // Wait to ensure cancellation completes
    });

    after(() => {
        // Step 9: Log out of the application
        cy.get('[data-testid="Navbar:left"]') // Access the sidebar
        .realHover() // Hover over the sidebar to open it
        .wait(1000);

        cy.get('[data-testid="Navbar:logout"]') // Access the logout button
        .realHover() // Hover over the logout button
        .click(); // Click the logout button

        cy.wait(1000); // Wait to ensure logout completes
    });
});
