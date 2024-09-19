describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Navigate to login page and perform login
        cy.visit('http://localhost:8080/authenticate'); // Open login page
        cy.get('[data-testid="form-field:email"]').type('test@mail.com'); // Enter email
        cy.get('[data-testid="form-field:password"]').type('test'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click login button

        cy.wait(1000); // Wait to ensure login completes
    });

    it('should collapse the sidebar', () => {
        // Collapse the sidebar to access the main content
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse sidebar

        cy.wait(1000); // Wait to ensure sidebar collapses
    });

    it('should click Create button', () => {
        // Open the issue creation form
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open create issue form

        cy.wait(1000); // Wait to ensure form opens
    });

    it('should create issue by filling first field', () => {
        // Select issue type and fill out the required fields
        cy.get('[data-testid="select:type"]').click()
            .parent() // Locate dropdown's parent
            .find('div') // Find divs inside dropdown
            .contains('Bug') // Select 'Bug' from dropdown
            .click();
        cy.wait(1000);

        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); // Enter summary
        cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.'); // Enter description

        cy.get('[data-testid="select:reporterId"]').realHover().should('contain', 'test'); // Verify reporter field

        cy.get('[data-testid="select:userIds"]').click()
            .parent() // Locate dropdown's parent
            .find('div') // Find divs inside dropdown
            .contains('test') // Select user from dropdown
            .click();

        cy.get('[data-testid="select:priority"]').click().wait(1000); // Open priority dropdown and wait
        cy.xpath('//*[@id="root"]/div[3]/div/div/form/div[8]/div[1]/div[2]/i').click(); // Close priority dropdown
        cy.xpath('//*[@id="root"]/div[3]/div/div/form').click(); // Click outside to close dropdown

        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Attempt to create issue
        cy.wait(500); 
        cy.get('[data-testid="form-field:priority"]').should('be.visible').and('contain', 'This field is required'); // Verify error message for missing priority

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Cancel issue creation

        cy.wait(1000); // Wait to ensure cancellation completes
    });

    after(() => {
        // Log out of the application
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible
        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over sidebar to reveal options
        cy.wait(1000); // Wait for hover effect to complete
        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over and click logout

        cy.wait(1000); // Wait to ensure logout completes
    });
});
