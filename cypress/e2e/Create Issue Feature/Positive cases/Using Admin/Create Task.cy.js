describe('Create Task Feature using Admin', () => {
    before(() => {
        // Step 1: Login as Admin
        cy.visit('http://localhost:8080/authenticate'); // Visit the login page
        cy.get('[data-testid="form-field:email"]').type('test@mail.com'); // Enter admin email
        cy.wait(1000); // Wait for the page to load
        cy.get('[data-testid="form-field:password"]').type('test'); // Enter admin password
        cy.wait(1000); // Wait for the page to load
        cy.get('[data-testid="form-field:login-button"]').click(); // Click login button
        cy.wait(1000); // Wait for the page to load
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse the sidebar
        cy.wait(1000); // Wait for the sidebar to collapse
    });

    it('should open the create issue form', () => {
        // Step 3: Open the create issue form
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open the create issue form
        cy.wait(1000); // Wait for the create issue form to open
    });

    it('should fill the "Create Issue" form and submit', () => {
        // Step 4a: Select Issue Type
        cy.get('[data-testid="select:type"]').realHover().wait(500); // Hover over the issue type dropdown and wait for the dropdown to appear

        // Step 4b: Enter Short Summary
        cy.get('[data-testid="Issue Create:short-summary"]').type('Working on a positive TestCase'); // Enter the issue summary

        // Step 4c: Enter Description
        cy.get('[data-testid="form-field:description"]').type('Working on how to create a task functionality.'); // Enter the issue description

        // Step 4d: Select Reporter
        cy.get('[data-testid="select:reporterId"]').realHover(); // Hover over the reporter dropdown
        cy.wait(500); // Wait for the selection to be processed

        // Step 4e: Select Assignees
        cy.get('[data-testid="select:userIds"]').click()
            .parent() // Locate the dropdown's parent
            .find('div') // Find divs inside the dropdown
            .contains('test') // Select the assignee
            .click();
        cy.wait(1000); // Wait for the selection to be processed

        // Step 4f: Set Priority
        cy.get('[data-testid="select:priority"]').click()
            .parent() // Locate the dropdown's parent
            .find('div') // Find divs inside the dropdown
            .contains('Low') // Select the priority level
            .click();
        cy.wait(1000); // Wait for the selection to be processed

        // Step 5: Click Create Issue Button
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Click to create the issue
        cy.wait(1000); // Wait for the issue creation process to complete
    });

    it('should verify the issue creation', () => {
        // Step 6: Verify if the issue was successfully created
        cy.xpath("//div[@type='success']").should('be.visible').and('contain', 'Issue has been successfully created.'); // Verify success message
        cy.wait(1000); // Wait to observe the success message
    });

    after(() => {
        // Step 7: Logout
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible

        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to open it
        cy.wait(1000); // Wait to ensure hover effect completes

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click to log out
    });
});
