describe('Create a Task in the Application', () => { 

    it('should log in', () => { 

        cy.visit('http://localhost:8080/authenticate'); 

        cy.get('[data-testid="form-field:email"]').type('test@mail.com'); 

        cy.get('[data-testid="form-field:password"]').type('test'); 

        cy.get('[data-testid="form-field:login-button"]').click(); 

        cy.wait(1000); 

    }); 

    it('should collapse the sidebar', () => { 

        cy.get('[data-testid="sidebar:collapse-button"]').click(); 

        cy.wait(1000); 

    }); 

    it('should click Create button', () => { 

        cy.get('[data-testid="Board:create-issue-button"]').click(); 

        cy.wait(1000); 

    }); 

    it('should create issue by filling first field', () => { 

        cy.get('[data-testid="select:type"]').click() 

            .parent() 

            .find('div') 

            .contains('Bug') 

            .click(); 

        cy.wait(1000); 

        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); 

        cy.get('[data-testid="form-field:description"]').type('Working on negative cases about how to create a task functionality.'); 

        cy.get('[data-testid="select:reporterId"]').realHover().should('contain', 'test'); 

        cy.get('[data-testid="select:userIds"]').click() 

            .parent() 

            .find('div') 

            .contains('test') 

            .click(); 

        cy.get('[data-testid="select:priority"]').click().wait(1000); 

        cy.xpath('//*[@id="root"]/div[3]/div/div/form/div[8]/div[1]/div[2]/i').click(); 

        cy.xpath('//*[@id="root"]/div[3]/div/div/form').click(); 

        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); 

        cy.wait(500); 

        cy.get('[data-testid="form-field:priority"]').should('be.visible').and('contain', 'This field is required'); 

        cy.get('[data-testid="IssueCreate:cancel-button"]').click(); 

        cy.wait(1000); 

    }); 

    after(() => { 

        cy.get('[data-testid="Navbar:left"]').should('be.visible'); 

        cy.get('[data-testid="Navbar:left"]').realHover(); 

        cy.wait(1000); 

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); 

        cy.wait(1000); 

    }); 

});