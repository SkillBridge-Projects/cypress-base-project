describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Step 1: Log in to the application
        cy.visit('http://localhost:8080/authenticate'); // Navigate to the login page
        cy.get('[data-testid="form-field:email"]').type('anjanadevi@nexzera.in'); // Enter email address
        cy.get('[data-testid="form-field:password"]').type('anjana'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click the login button

        cy.wait(1000); // Wait to ensure login completes
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse the sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click the button to collapse the sidebar

        cy.wait(1000); // Wait to ensure the sidebar collapses
    });

    it('should click Create button', () => {
        // Step 3: Open the Create Issue form
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click the button to create a new issue

        cy.wait(1000); // Wait to ensure the form opens
    });

    it('should create issue by filling first field', () => {
        // Step 4: Select issue type
        cy.get('[data-testid="select:type"]').click()
        .parent() // Locate the dropdown's parent
        .find('div') // Find divs inside the dropdown
        .contains('Bug') // Select 'Bug' from the dropdown
        .click()
        .wait(1000);
        
        // Step 5: Enter short summary for the issue
        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); 

        // Step 6: Enter description for the issue
        cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.'); 

        // Step 7: Verify reporter dropdown
        cy.get('[data-testid="select:reporterId"]').realHover().should('contain', 'test'); 

        // Step 8: Select user from the user dropdown
        cy.get('[data-testid="select:userIds"]').click()
        .parent() // Locate the dropdown's parent
        .find('div') // Find divs inside the dropdown
        .contains('test') // Select 'test' from the dropdown
        .click();

        // Step 9: Check priority field
        cy.get('[data-testid="select:priority"]').click().wait(1000);
        cy.xpath('//*[@id="root"]/div[3]/div/div/form/div[8]/div[1]/div[2]/i').click();
        cy.xpath('//*[@id="root"]/div[3]/div/div/form').click();

        // Step 10: Attempt to create the issue and check for validation error
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Click the Create Issue button
        cy.wait(500); // Wait for error message
        cy.get('[data-testid="form-field:priority"]').should('be.visible').and('contain', 'This field is required'); // Verify the priority field validation message

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Click the Cancel button

        cy.wait(1000); // Wait to ensure cancellation completes
    });

    after(() => {
        // Step 11: Log out of the application
        cy.get('[data-testid="Navbar:left"]') // Access the sidebar
        .realHover() // Hover over the sidebar to open it
        .wait(1000);

        cy.get('[data-testid="Navbar:logout"]') // Access the logout button
        .realHover() // Hover over the logout button
        .click(); // Click the logout button

        cy.wait(1000); // Wait to ensure logout completes
    });
});
