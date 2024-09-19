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
        // Step 4: Create an issue with the first field filled
        cy.get('[data-testid="select:type"]').click() // Open the issue type dropdown
        .parent() // Navigate to the dropdown's parent
        .find('div') // Find divs inside the dropdown
        .contains('Bug') // Select 'Bug' from the dropdown
        .click()
        .wait(1000);

        // Step 5: Enter issue summary
        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); 

        // Step 6: Enter issue description
        cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.'); 

        // Step 7: Interact with the reporter field
        cy.get('[data-testid="select:reporterId"]').click().wait(1000); // Open the reporter dropdown
        cy.xpath('//*[@id="root"]/div[3]/div/div/form/div[6]/div/div[2]/i').click(); // Click to select the reporter
        cy.xpath('//*[@id="root"]/div[3]/div/div/form').click(); // Click outside to close dropdown

        // Submit the form and check for error message
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Click the Create issue button
        cy.wait(500); // Wait for the error message
        cy.get('[data-testid="form-field:reporterId"]').should('be.visible').and('contain', 'This field is required'); // Verify the error message

        // Cancel the form
        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Click the Cancel button

        cy.wait(1000); // Wait to ensure the form is cancelled
    });

    after(() => {
        // Step 8: Log out of the application
        cy.get('[data-testid="Navbar:left"]') // Access the sidebar
        .realHover() // Hover over the sidebar to open it
        .wait(1000);

        cy.get('[data-testid="Navbar:logout"]') // Access the logout button
        .realHover() // Hover over the logout button
        .click(); // Click the logout button

        cy.wait(1000); // Wait to ensure logout completes
    });
});
