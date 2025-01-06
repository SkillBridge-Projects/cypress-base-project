describe('Create Project Feature and Validation', () => { 

    // Step 1: Login to the site 

    it('should log in to the site', () => { 

        cy. visit('http://localhost:8080/authenticate');  

        cy.wait(1000);  

        cy.get('input[name="email"]').type('test@mail.com');  

        cy.wait(1000);  

        cy.get('input[name="password"]').type('test');  

        cy.wait(1000);  

        cy.get('button[type="submit"]').click();  

        cy.wait(1000);  

    }); 

    // Step 2: Open the "Create Project" form 

    it('should open the create project form', () => { 

        cy.get('[data-testid="Navbar:left"]').realHover().wait(1000);  

        cy.get('[data-testid="Navbar:create-project"]').realHover().click();  

        cy.wait(1000);  

    }); 

    // Step 3: Attempt to create a project without filling in required fields and verify validation messages 

    it('should display validation errors when required fields are missing', () => { 

        cy.get('[data-testid="create project:Create"]').click();  

        cy.wait(1000);  

        cy.get('[data-testid="form-field:name"]').should('be.visible').and('contain', 'This field is required'); 

        cy.get('[data-testid="form-field:category"]').should('be.visible').and('contain', 'This field is required'); 

        cy.get('[data-testid="create project:Cancel"]').click().wait(1000);  

    }); 

    // Step 4: Logout from the application 

    it('should log out from the application', () => { 

        cy.get('[data-testid="Navbar:left"]').should('be.visible');  

        cy.get('[data-testid="Navbar:left"]').realHover();  

        cy.wait(1000);  

        cy.get('[data-testid="Navbar:logout"]').realHover().click();  

        cy.wait(1000);  

    }); 

});