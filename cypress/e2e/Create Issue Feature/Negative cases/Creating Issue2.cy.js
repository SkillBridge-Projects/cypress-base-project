describe('Create a Task in the Application', () => {
    it('should log in, collapse sidebar, and create a new task', () => {
        // Step 1: Login
        cy.visit('http://localhost:8080/authenticate'); // Replace with your actual login URL
        cy.get('[data-testid="form-field:email"]').type('test@mail.com'); // Replace with your actual data-testid for username field
        cy.get('[data-testid="form-field:password"]').type('test'); // Replace with your actual data-testid for password field
        cy.get('[data-testid="form-field:login-button"]').click(); // Replace with your actual data-testid for login button

        // Step 2: Collapse sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Replace with actual data-testid for sidebar collapse button

        // Step 3: Click Create button
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Replace with actual data-testid for create button

        //step 4:create issue without filling any fields
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();

        // Step 5: Fill the "Create Issue" form
        // Step 4a: Select Issue Type
        cy.get('[data-testid="select:type"]').click()
        .parent() // Locate the dropdown's parent
        .find('div') // Find divs inside the dropdown
        .contains('Bug') // Target the second div (0-based index)
        .click();

        //step 6
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();

        //step 7
        cy.get('[data-testid="form-field:title"]').should('be.visible').and('contain', 'This field is required');

        //step 8
        cy.get('[data-testid="Issue Create:short-summary"]').type('$12345@'); 
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();// Replace with actual data-testid for summary field
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should('be.visible').and('contain', 'Something went wrong, please contact our support.');

        //step 9
        cy.get('[data-testid="form-field:description"]').type('1234 Working on negative cases about how to create a task functionality.'); 
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();// Replace with actual data-testid for summary field
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should('be.visible').and('contain', 'Something went wrong, please contact our support.');// Replace with actual data-testid for description field
       
        //step 10
        cy.get('[data-testid="select:reporterId"]');
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();// Replace with actual data-testid for summary field
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should('be.visible').and('contain', 'Something went wrong, please contact our support.');// Replace with actual data-testid for description field

        //step 11
        cy.get('[data-testid="select:userIds"]').click()
        .parent() // Locate the dropdown's parent
        .find('div') // Find divs inside the dropdown
        .contains('test') // Target the second div (0-based index)
        .click();

        //step 12
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();// Replace with actual data-testid for summary field

        


})

});