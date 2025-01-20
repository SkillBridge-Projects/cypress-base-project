describe('Negative cases for User Edit Feature', () => { 

    before(() => { 

        // Use the custom login command with hardcoded credentials. 

        cy.login('test@mail.com', 'test'); 

    }); 

    it('should contain the Users option', () => { 

        cy.xpath("//div[@class='sc-epnACN hnjsOo']").should("contain", "Users"); 

        cy.xpath("//a[@href='/project/users']").click(); // Navigates to the Users section. 

        cy.wait(1000); // Waits to ensure the page loads. 

    }); 

    it('validating the fields', () => { 

        cy.xpath("//div[4]//div[2]//button[1]").click(); // Opens the edit form. 

        // Verifies that the user edit form is visible. 

        cy.get('[data-testid="UserEdit:Form"]').should("be.visible"); 

        cy.wait(1000); 

        // Clears the name field and types an invalid value. 

        cy.get('[data-testid="form-field:name"]').clear().type('@12345'); 

        cy.wait(1000);   

        // Clicks the isAdmin field checkbox. 

        cy.get('[data-testid="form-field:isAdmin"]').click(); 

        // Simulates multiple clicks on an element using XPath. 

        cy.xpath("//i[@class='sc-bdVaJa buNcFy sc-bRBYWo emFNex']").click({ multiple: true, force: true }); 

        // Ensures the form remains active. 

        cy.get("[data-testid='UserEdit:Form']").click(); 

        // Attempts to save the changes. 

        cy.get('[data-testid="UserEdit:Edit User-button"]').click(); 

        // Verifies that an error message is displayed for the isAdmin field. 

        cy.get('[data-testid="form-field:isAdmin"]') 

          .should('be.visible') 

          .and('contain', 'This field is required');  

        cy.wait(1000); // Waits for error message to display. 

        // Cancels the form. 

        cy.get('[data-testid="UserEdit:Cancel-button"]').click(); 

        cy.wait(1000); 

    }); 

    after(() => { 

        // Ensures the sidebar is visible. 

        cy.get('[data-testid="Navbar:left"]').should('be.visible'); 

        // Hovers over the sidebar and logs out. 

        cy.get('[data-testid="Navbar:left"]').realHover(); 

        cy.wait(1000); 

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Logs out. 

    }); 

});