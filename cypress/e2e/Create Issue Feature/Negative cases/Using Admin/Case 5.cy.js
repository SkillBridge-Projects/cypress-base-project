// describe('Create a Task in the Application', () => {

//     it('should log in', () => {
//         // Step 1: Login
//         cy.visit('http://localhost:8080/authenticate'); // Replace with your actual login URL
//         cy.get('[data-testid="form-field:email"]').type('test@mail.com'); // Replace with your actual data-testid for email field
//         cy.get('[data-testid="form-field:password"]').type('test'); // Replace with your actual data-testid for password field
//         cy.get('[data-testid="form-field:login-button"]').click(); // Replace with your actual data-testid for login button

//         cy.wait(1000); // Wait to ensure login completes
//     });

//     it('should collapse the sidebar', () => {
//         // Step 2: Collapse sidebar
//         cy.get('[data-testid="sidebar:collapse-button"]').click(); // Replace with actual data-testid for sidebar collapse button

//         cy.wait(1000); // Wait to ensure sidebar collapses
//     });

//     it('should click Create button', () => {
//         // Step 3: Click Create button
//         cy.get('[data-testid="Board:create-issue-button"]').click(); // Replace with actual data-testid for create button

//         cy.wait(1000); // Wait to ensure create button action completes
//     });

//     it('should create issue by filling first field', () => {
//         // Step 4: Create issue with filling the first field
//         cy.get('[data-testid="select:type"]').click()
//         .parent() // Locate the dropdown's parent
//         .find('div') // Find divs inside the dropdown
//         .contains('Bug') // Target the second div (0-based index)
//         .click()
//         .wait(1000);
        
//         //step 5
//         cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); 

//         //step 6
//         cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.'); 

//         //step 7
//         cy.get('[data-testid="select:reporterId"]').click().wait(1000);
//         //cy.get('[data-testid="IssueCreate:Reporter-search"]');
//         //cy.get('[data-testid="icon:close"]').focused().click();
//         cy.xpath('//*[@id="root"]/div[3]/div/div/form/div[6]/div/div[2]/i').click();
//         cy.xpath('//*[@id="root"]/div[3]/div/div/form').click();
//         //cy.get('[data-testid="select:reporterId"]').should('not.contain', 'test'); // Ensure that 'test' (or the default reporter value) is no longer selected


        
//         cy.get('[data-testid="IssueCreate:create-issue-button"]').click();
//         cy.wait(500);
//         cy.get('[data-testid="form-field:reporterId"]').should('be.visible').and('contain', 'This field is required');

//         cy.get('[data-testid="IssueCreate:cancel-button"]').click();

//         cy.wait(1000); // Wait to ensure cancellation completes
//     });

//     after(() => {
//         // Step 5: Logout
//         cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible

//         cy.get('[data-testid="Navbar:left"]') // Replace with correct data-testid for sidebar
//             .realHover(); // Hover over the sidebar to open it
//         cy.wait(1000); // Wait to ensure hover effect completes

//         cy.get('[data-testid="Navbar:logout"]') // Replace with correct data-testid for logout button
//             .realHover() // Hover over the logout button
//             .click(); // Click on logout

//         // Wait to ensure logout completes
//         cy.wait(1000);
//      });
// });
describe('Create a Task in the Application', () => {

    it('should log in', () => {
        // Step 1: Navigate to the login page and log in
        cy.visit('http://localhost:8080/authenticate'); // Visit login URL
        cy.get('[data-testid="form-field:email"]').type('test@mail.com'); // Enter email
        cy.get('[data-testid="form-field:password"]').type('test'); // Enter password
        cy.get('[data-testid="form-field:login-button"]').click(); // Click login button
        cy.wait(1000); // Wait to ensure login completes
    });

    it('should collapse the sidebar', () => {
        // Step 2: Collapse the sidebar
        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse sidebar
        cy.wait(1000); // Wait to ensure sidebar collapses
    });

    it('should click Create button', () => {
        // Step 3: Click the Create button to open the issue creation form
        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open the issue creation form
        cy.wait(1000); // Wait for the form to open
    });

    it('should create issue by filling required fields and handling reporter', () => {
        // Step 4: Select issue type
        cy.get('[data-testid="select:type"]').click()
            .parent() // Locate the dropdown's parent
            .find('div') // Find divs inside the dropdown
            .contains('Bug') // Select 'Bug' from the dropdown
            .click();
        cy.wait(1000);

        // Step 5: Enter short summary
        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); 

        // Step 6: Enter description
        cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.'); 

        // Step 7: Handle reporter field
        cy.get('[data-testid="select:reporterId"]').click().wait(1000); // Open reporter dropdown
        cy.xpath('//*[@id="root"]/div[3]/div/div/form/div[6]/div/div[2]/i').click(); // Click reporter dropdown item
        cy.xpath('//*[@id="root"]/div[3]/div/div/form').click(); // Click outside dropdown to close

        // Attempt to create issue and verify error
        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); 
        cy.wait(500); 
        cy.get('[data-testid="form-field:reporterId"]').should('be.visible').and('contain', 'This field is required'); // Verify reporter field error

        // Cancel issue creation
        cy.get('[data-testid="IssueCreate:cancel-button"]').click();
        cy.wait(1000); // Wait to ensure cancellation completes
    });

    after(() => {
        // Step 8: Log out of the application
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible

        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over sidebar to reveal options
        cy.wait(1000); // Wait for hover effect to complete

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over and click logout button
        cy.wait(1000); // Wait for logout to complete
    });
});
