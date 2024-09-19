describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Step 1: Login
        cy.visit('http://localhost:8080/authenticate'); // Navigate to the login page
        cy.get('[data-testid="form-field:email"]').type('anjanadevi@nexzera.in'); // Enter email
        cy.get('[data-testid="form-field:password"]').type('anjana'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click login button

        cy.wait(1000); // Wait to ensure login completes
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse the sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse the sidebar

        cy.wait(1000); // Wait to ensure sidebar collapses
    });

    it('should click Create button', () => {
        // Step 3: Click the Create button
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open the create issue form

        cy.wait(1000); // Wait to ensure the form opens
    });

    it('should create issue by filling first field', () => {
        // Step 4: Create issue and handle errors
        cy.get('[data-testid="select:type"]').click() // Open the issue type dropdown
        .parent() // Navigate to the dropdown's parent
        .find('div') // Find divs inside the dropdown
        .contains('Bug') // Select 'Bug' from the dropdown
        .click()
        .wait(1000);

        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); // Enter issue summary
        cy.get('[data-testid="form-field:description"]').type('1234@#$ Working on negative cases about how to create a task functionality.'); // Enter issue description
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Attempt to create the issue
        cy.wait(500); // Wait for error message

        // Verify that an error message is displayed
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should('be.visible').and('contain', 'Something went wrong, please contact our support.');

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Cancel the form

        cy.wait(1000); // Wait to ensure cancellation completes
    });

    after(() => {
        // Step 5: Logout
        cy.get('[data-testid="Navbar:left"]') // Access the sidebar
        .realHover() // Hover over the sidebar to open it
        .wait(1000);

        cy.get('[data-testid="Navbar:logout"]') // Access the logout button
        .realHover() // Hover over the logout button
        .click(); // Click to log out

        cy.wait(1000); // Wait to ensure logout completes
    });
});
