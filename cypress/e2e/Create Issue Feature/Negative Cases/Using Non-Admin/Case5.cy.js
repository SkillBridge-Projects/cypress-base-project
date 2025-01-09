describe('Create a Task in the Application', () => { 

    it('should log in', () => { 

        cy.visit('http://localhost:8080/authenticate'); // Visit login URL 

        cy.get('[data-testid="form-field:email"]').type('lakisha@mail.com'); // Enter email 

        cy.get('[data-testid="form-field:password"]').type('lakisha'); // Enter password 

        cy.get('[data-testid="form-field:login-button"]').click(); // Click login button 

        cy.wait(1000); // Wait to ensure login completes 

    }); 

    it('should collapse the sidebar', () => { 

        cy.get('[data-testid="sidebar:collapse-button"]').click(); // Click to collapse sidebar 

        cy.wait(1000); // Wait to ensure sidebar collapses 

    }); 

    it('should click Create button', () => { 

        cy.get('[data-testid="Board:create-issue-button"]').click(); // Click to open the issue creation form 

        cy.wait(1000); // Wait for the form to open 

    }); 

    it('should create issue by filling required fields and handling reporter', () => { 

        cy.get('[data-testid="select:type"]').click() 

            .parent() // Locate the dropdown's parent 

            .find('div') // Find divs inside the dropdown 

            .contains('Bug') // Select 'Bug' from the dropdown 

            .click(); 

        cy.wait(1000); 

        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task');  

        cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.');  

        cy.get('[data-testid="select:reporterId"]').click().wait(1000); // Open reporter dropdown 

        cy.xpath('//*[@id="root"]/div[3]/div/div/form/div[6]/div/div[2]/i').click(); // Click reporter dropdown item 

        cy.xpath('//*[@id="root"]/div[3]/div/div/form').click(); // Click outside dropdown to close 

        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();  

        cy.wait(500);  

        cy.get('[data-testid="form-field:reporterId"]').should('be.visible').and('contain', 'This field is required'); // Verify reporter field error 

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); 

        cy.wait(1000); // Wait to ensure cancellation completes 

    }); 

    after(() => { 

        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible 

        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over sidebar to reveal options 

        cy.wait(1000); // Wait for hover effect to complete 

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over and click logout button 

        cy.wait(1000); // Wait for logout to complete 

    }); 

});