describe('Create Task Feature using Non-Admin', () => { 

    before(() => { 

        // Step 1: Login as Admin 

        cy.visit('http://localhost:8080/authenticate'); // Visit the login page 

        cy.get('[data-testid="form-field:email"]').type('lakisha@mail.com'); // Enter admin email 

        cy.wait(1000); // Short wait to ensure the page is ready 

        cy.get('[data-testid="form-field:password"]').type('lakisha'); // Enter admin password 

        cy.wait(1000); // Ensure smooth transition before login 

        cy.get('[data-testid="form-field:login-button"]').click(); // Click the login button 

        cy.wait(1000); // Wait for the dashboard to load after login 

    }); 

    it('should collapse the sidebar', () => { 

        // Step 2: Collapse the sidebar 

        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Collapse the sidebar 

        cy.wait(1000); // Wait to ensure the sidebar is fully collapsed 

    }); 

    it('should open the create issue form', () => { 

        // Step 3: Open the "Create Issue" form 

        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open the form 

        cy.wait(1000); // Wait for the form to appear 

    }); 

    it('should fill the "Create Issue" form and submit', () => { 

        // Step 4a: Select the issue type 

        cy.get('[data-testid="select:type"]') 

            .realHover().wait(1000); // Hover over the dropdown for issue type 

        // Step 4b: Enter a short summary 

        cy.get('[data-testid="Issue Create:short-summary"]') 

            .type('Working on a positive TestCase'); // Input issue summary 

        // Step 4c: Provide a description 

        cy.get('[data-testid="form-field:description"]') 

            .type('Working on how to create a task functionality.'); // Input description 

        // Step 4d: Select the reporter 

        cy.get('[data-testid="select:reporterId"]') 

            .realHover(); // Hover to reveal the reporter dropdown 

        cy.wait(1000); // Allow time for processing 

        // Step 4e: Select assignees 

        cy.get('[data-testid="select:userIds"]').click() // Open the dropdown 

            .parent() // Navigate to the dropdown container 

            .find('div') // Locate dropdown items 

            .contains('test') // Choose the assignee named "test" 

            .click(); // Assign the task 

        cy.wait(1000); // Wait for the action to process 

        // Step 4f: Set task priority 

        cy.get('[data-testid="select:priority"]').click() // Open the priority dropdown 

            .parent() // Navigate to the dropdown container 

            .find('div') // Locate dropdown items 

            .contains('Low') // Choose the "Low" priority option 

            .click(); 

        cy.wait(1000); // Ensure priority is set 

        // Step 5: Submit the form 

        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); // Create the issue 

        cy.wait(1000); // Wait for issue creation confirmation 

    }); 

    it('should verify the issue creation', () => { 

        // Step 6: Verify successful issue creation 

        cy.xpath("//div[@type='success']") 

            .should('be.visible') // Ensure the success message is visible 

            .and('contain', 'Issue has been successfully created.'); // Verify message content 

        cy.wait(1000); // Observe the success message for clarity 

    }); 

    after(() => { 

        // Step 7: Logout 

        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is accessible 

        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover to open the sidebar 

        cy.wait(1000); // Allow time for sidebar to expand 

        // Perform logout 

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Click logout 

    }); 

}); 