describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Navigate to the login page and perform login
        cy.visit('http://localhost:8080/authenticate'); // Open login page
        cy.get('[data-testid="form-field:email"]').type('test@mail.com'); // Enter email
        cy.get('[data-testid="form-field:password"]').type('test'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click login button
        cy.wait(1000); // Wait for login to complete
    });

    it('should collapse the sidebar', () => {
        // Collapse the sidebar to access the main content
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse sidebar
        cy.wait(1000); // Wait for sidebar to collapse
    });

    it('should click Create button', () => {
        // Open the issue creation form
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open create issue form
        cy.wait(1000); // Wait for form to open
    });

    it('should create issue by filling first field', () => {
        // Select issue type and fill out the required fields
        cy.get('[data-testid="select:type"]').click() // Open type dropdown
            .parent() // Locate dropdown parent
            .find('div') // Find divs inside dropdown
            .contains('Bug') // Select 'Bug' from dropdown
            .click();
        cy.wait(1000);
        
        // Enter short summary and description
        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); // Enter summary
        cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.'); // Enter description

        // Verify reporter field and handle dropdown
        cy.get('[data-testid="select:reporterId"]').realHover().should('contain', 'test'); // Verify reporter field
        
        // Attempt to create issue and check for errors
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Submit issue
        cy.wait(500); 
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should('be.visible').and('contain', 'Something went wrong, please contact our support.'); // Verify error message

        // Cancel issue creation
        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); // Click cancel button
        cy.wait(1000); // Wait for cancellation to complete
    });

    after(() => {
        // Log out of the application
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible
        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over sidebar to reveal options
        cy.wait(1000); // Wait for hover effect to complete
        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over and click logout
        cy.wait(1000); // Wait for logout to complete
    });
});
