describe('Duplicating the Project and Validation Check', () => { 

    // Step 1: Login to the site 

    it('should log in to the site', () => { 

        cy.visit('http://localhost:8080/authenticate'); 

        cy.wait(1000); 

        cy.get('input[name="email"]').type('test@mail.com'); 

        cy.wait(1000); 

        cy.get('input[name="password"]').type('test'); 

        cy.wait(1000); 

        cy.get('button[type="submit"]').click(); 

        cy.wait(1000); 

    }); 

    // Step 2: Create a new project with validation checks 

    it('should create a new project with validation checks', () => { 

        cy.get('[data-testid="Navbar:left"]').realHover().wait(1000); 

        cy.get('[data-testid="Navbar:create-project"]').realHover().click(); 

        cy.wait(1000); 

        cy.get('[data-testid="create project:Name"]').click().type('QA Project'); 

        cy.get('[data-testid="create project:URL"]').type('http://example.com'); 

        cy.xpath('//div[@class="ql-editor ql-blank"]').type('This is a QA project'); 

        cy.get('[data-testid="select:category"]').realHover().click(); 

        cy.get('[data-testid="select-option:Software"]').click(); 

        cy.get('[data-testid="create project:Create"]').click().wait(1000); 

        cy.xpath("//div[@type='danger']") 

            .should('be.visible') 

            .and('contain', 'Something went wrong, please contact our support.'); 

        cy.get('[data-testid="create project:Cancel"]').click().wait(1000); 

    }); 

    // Step 3: Logout 

    it('should log out from the site', () => { 

        cy.get('[data-testid="Navbar:left"]').should('be.visible'); 

        cy.get('[data-testid="Navbar:left"]').realHover(); 

        cy.wait(1000); 

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); 

        cy.wait(1000); 

    }); 

});