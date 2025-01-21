describe('Multi Project Selection for Users Feature', () => { 

    before(() => { 

      // Clear local storage to ensure no residual data 

      localStorage.clear(); 

      // Load the fixture data for user login 

      cy.fixture('UserEdit.json').then((loginData) => { 

        // Use the fixture data to log in to the application 

        cy.visit('http://localhost:8080/authenticate'); // visit the page 

        // Input email and password for authentication 

        cy.get('input[name="email"]').type(loginData.username); 

        cy.wait(1000); 

        cy.get('input[name="password"]').type(loginData.password); 

        cy.wait(1000); 

        // Click the login button to submit the form 

        cy.get('button[type="submit"]').click();  

        cy.wait(1000); 

        // Verify that login was successful by checking for the expected element 

        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should("be.visible").and("contain", loginData.expected); 

        cy.wait(1000); 

        // Click to close the toast message 

        cy.xpath("//div[@class='sc-hqyNC iwIKiC']").click(); 

        cy.wait(1000); 

      }); 

    }); 

    it('should contain the Users option', () => { 

      // Verify that the Users option is present in the sidebar 

      cy.xpath("//div[@class='sc-epnACN hnjsOo']").and("contain", "Users"); // Check for the Users option 

      // Click to navigate to the Users form 

      cy.xpath("//a[@href='/project/users']").click(); 

      cy.wait(1000); 

    }); 

    it('select the user and assign the project', () => { 

      // Click the button to edit the user 

      cy.xpath("//body[1]/div[1]/div[2]/div[2]/div[5]/div[2]/button[1]").click(); 

      // Verify that the User Edit form is visible 

      cy.get('[data-testid="UserEdit:Form"]').should("be.visible"); 

      cy.wait(1000); 

      // Access the projects selection field 

      cy.get('[data-testid="form-field:projects"]'); 

      // Click to select multiple projects 

      cy.xpath("//div[@class='sc-gipzik kSIViy']").click({multiple: true, force: true}); 

      // Type in the search the field to find a existing project 

      cy.xpath("//input[@placeholder='Search']").type('Testing'); 

      // Verify that no results are returned for the search 

      cy.xpath("//div[@class='sc-fBuWsC cCZiRX']").and('contain', 'No results'); 

      // Take a screenshot to validate that adding the existing project returned no results 

      cy.screenshot('validation for Adding the existing project'); 

      // Click to focus back on the form 

      cy.get('[data-testid="UserEdit:Form"]').click(); 

      cy.wait(1000); 

      // Click the Cancel button to exit the User Edit form without saving changes 

      cy.get('[data-testid="UserEdit:Cancel-button"]').click(); 

    }); 

    after(() => { 

      // Ensure the sidebar is visible before logging out 

      cy.get('[data-testid="Navbar:left"]').should('be.visible'); 

      // Hover over the sidebar to open it for navigation 

      cy.get('[data-testid="Navbar:left"]').realHover(); // Open sidebar 

      cy.wait(1000); // Wait to ensure hover effect completes 

      // Hover over the logout button and click to log out of the application 

      cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Log out 

    }); 

  });