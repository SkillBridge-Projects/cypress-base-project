describe('Create a Task in the Application', () => { 

    it('should log in', () => { 

        cy.visit('http://localhost:8080/authenticate'); 

        cy.get('[data-testid="form-field:email"]').type('lakisha@mail.com'); 

        cy.get('[data-testid="form-field:password"]').type('lakisha'); 

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

    it('should create issue by filling the first field', () => { 

        cy.get('[data-testid="select:type"]').click() 

            .parent() 

            .find('div') 

            .contains('Bug') 

            .click(); 

        cy.wait(1000); 

        cy.get('[data-testid="Issue Create:short-summary"]').type('Creating a Task'); 

        cy.get('[data-testid="form-field:description"]').type('1234@#$ Working on negative cases about how to create a task functionality.'); 

        cy.get('[data-testid="IssueCreate:create-issue-button"]').click(); 

        cy.wait(500); 

        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div") 

            .should('be.visible') 

            .and('contain', 'Something went wrong, please contact our support.'); 

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