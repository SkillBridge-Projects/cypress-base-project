describe('Negative cases for User Edit Feature', () => { 

    before(() => { 

      // Use the custom login command with hardcoded credentials 

      cy.login('test@mail.com', 'test'); 

    }); 

    it('should contain the Users option', () => { 

      cy.xpath("//div[@class='sc-epnACN hnjsOo']").should("contain", "Users"); // Click to collapse the sidebar 

      cy.xpath("//a[@href='/project/users']").click(); 

      cy.wait(1000); 

    }); 

    it('validating the fields', () => { 

        cy.xpath("//div[4]//div[2]//button[1]").click(); 

        cy.get('[data-testid="UserEdit:Form"]').should("be.visible"); 

        cy.wait(1000); 

        cy.get('[data-testid="form-field:name"]').clear(); 

        cy.wait(1000); 

        cy.get('[data-testid="UserEdit:Edit User-button"]').click(); 

        cy.get('[data-testid="form-field:name"]').should('be.visible').and('contain', 'This field is required'); // Verify reporter field error 

        cy.wait(1000); 

        cy.get('[data-testid="UserEdit:Cancel-button"]').click(); 

        cy.wait(1000); 

    }); 


    after(() => { 

        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible 

        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to open it 

        cy.wait(1000); // Wait to ensure hover effect completes 

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click to log out 

    }); 

});