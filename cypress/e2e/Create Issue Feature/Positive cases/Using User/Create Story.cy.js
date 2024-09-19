describe('Task Management in the Application', () => {
    before(() => {
        // Step 1: Login
        cy.visit('http://localhost:8080/authenticate'); // Replace with your actual login URL
        cy.get('[data-testid="form-field:email"]').type('anjanadevi@nexzera.in'); // Replace with your actual data-testid for username field
        cy.get('[data-testid="form-field:password"]').type('anjana'); // Replace with your actual data-testid for password field
        cy.get('[data-testid="form-field:login-button"]').click(); // Replace with your actual data-testid for login button
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Replace with actual data-testid for sidebar collapse button
        cy.wait(1000); // Wait for the sidebar to collapse
    });

    it('should open the create issue form', () => {
        // Step 3: Click Create button
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Replace with actual data-testid for create button
        cy.wait(1000); // Wait for the create issue form to open
    });

    it('should fill the "Create Issue" form and submit', () => {
        // Step 4a: Select Issue Type
        cy.get('[data-testid="select:type"]').click()
            .parent() // Locate the dropdown's parent
            .find('div') // Find divs inside the dropdown
            .contains('Story') // Select the issue type
            .click();
        cy.wait(500); // Wait for the selection to be processed

        // Step 4b: Enter Short Summary
        cy.get('[data-testid="Issue Create:short-summary"]').type('working on a positive TestCase'); // Replace with actual data-testid for summary field

        // Step 4c: Enter Description
        cy.get('[data-testid="form-field:description"]').type('Working on how to create a task functionality.'); // Replace with actual data-testid for description field

        // Step 4d: Select Reporter
        cy.get('[data-testid="select:reporterId"]')
        .realHover()
        cy.wait(500); // Wait for the selection to be processed

        // Step 4e: Select Assignees
        cy.get('[data-testid="select:userIds"]').click()
            .parent() // Locate the dropdown's parent
            .find('div') // Find divs inside the dropdown
            .contains('test') // Select the assignee
            .click();
        cy.wait(500); // Wait for the selection to be processed

        // Step 4f: Set Priority
        cy.get('[data-testid="select:priority"]').click() 
            .parent()
            .find('div')
            .contains('Highest') // Select the priority
            .click();
        cy.wait(500); // Wait for the selection to be processed

        // Step 5: Click Create Issue Button
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Replace with actual data-testid for create issue button
        cy.wait(1000); // Wait for the issue creation process to complete
    });

    it('should verify the issue creation', () => {
        // Step 6: Verify if the issue was successfully created
        cy.xpath("//div[@type='success']").should('be.visible').and('contain', 'Issue has been successfully created.'); // Replace with actual success message
        cy.wait(1000); // Wait to observe the success message
    });

    after(() => {
        // Step 7: Logout
        cy.get('[data-testid="Navbar:left"]').should('be.visible');// sidebar to be visible

        cy.get('[data-testid="Navbar:left"]') // Replace with correct XPath for sidebar
        .realHover(); // Hover over the sidebar to open it
        cy.wait(1000);
        
        cy.get('[data-testid="Navbar:logout"]')  // Adjust this XPath to match the logout button's actual position
       .realHover() // Hover over the logout button
       .click(); // Click on logout
        //cy.get('[data-testid="header:logout-button"]').click(); // Replace with actual data-testid for logout button
    });
});
