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

        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();  

        cy.wait(500);  

        cy.get('[data-testid="form-field:title"]').should('be.visible').and('contain', 'This field is required');  

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