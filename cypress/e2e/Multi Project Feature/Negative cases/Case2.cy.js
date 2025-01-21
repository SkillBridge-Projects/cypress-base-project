describe('Multi Project Selection for Users Feature', () => { 

    before(() => { 
  
      // Clear local storage to ensure a fresh start before testing 
  
      localStorage.clear(); 

      // Load the fixture data for user login 
  
      cy.fixture('UserEdit.json').then((loginData) => { 
  
        // Navigate to the login page 
  
        cy.visit('http://localhost:8080/authenticate'); // visit the login page 
  
        // Input the email and password from fixture data 
  
        cy.get('input[name="email"]').type(loginData.username); 
  
        cy.wait(1000); 
  
        cy.get('input[name="password"]').type(loginData.password); 
  
        cy.wait(1000); 

        // Submit the login form 
  
        cy.get('button[type="submit"]').click();  
  
        cy.wait(1000); 

        // Verify successful login by checking for the expected element 
  
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should("be.visible").and("contain", loginData.expected); 
  
        cy.wait(1000); 

        // Click and close the toast message 
  
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']").click(); 
  
        cy.wait(1000); 
  
      }); 
  
    }); 

    it('should contain the Users option', () => { 
  
      // Verify that the Users option is available in the sidebar 
  
      cy.xpath("//div[@class='sc-epnACN hnjsOo']").and("contain", "Users"); // Check for the Users option 
  
      // Click to navigate to the Users page 
  
      cy.xpath("//a[@href='/project/users']").click(); 
  
      cy.wait(1000); 
  
    }); 

    it('select the user and assign the project', () => { 
  
      // Click to edit the selected user 
  
      cy.xpath("//body[1]/div[1]/div[2]/div[2]/div[5]/div[2]/button[1]").click(); 
  
      // Ensure the User Edit form is displayed 
  
      cy.get('[data-testid="UserEdit:Form"]').should("be.visible"); 
  
      cy.wait(1000); 
  
      // Access the project selection field for multi-project selection 
  
      cy.get('[data-testid="form-field:projects"]'); 
  
      // Click to enable selection of multiple projects 
  
      cy.xpath("//div[@class='sc-gipzik kSIViy']").click({ multiple: true, force: true });   
  
      // Type an invalid project name to validate error handling 
  
      cy.xpath("//input[@placeholder='Search']").type('$@Dummy Project'); 
  
      // Verify that no results are found for the invalid search 
  
      cy.xpath("//div[@class='sc-fBuWsC cCZiRX']").and('contain', 'No results'); 
  
      // Take a screenshot to document the validation of adding an invalid project 
  
      cy.screenshot('validation for Adding the Invalid Project'); 
  
      // Click back on the form to ensure focus 
  
      cy.get('[data-testid="UserEdit:Form"]').click(); 
  
      cy.wait(1000); 

      // Click the Cancel button to exit without saving changes 
  
      cy.get('[data-testid="UserEdit:Cancel-button"]').click(); 
  
    }); 
  

    after(() => { 
  
      // Ensure the sidebar is visible before logging out 
  
      cy.get('[data-testid="Navbar:left"]').should('be.visible'); 

      // Hover over the sidebar to prepare for navigation 
  
      cy.get('[data-testid="Navbar:left"]').realHover(); // Open sidebar 
  
      cy.wait(1000); // Wait to ensure hover effect completes 

      // Hover over the logout button and click to log out of the application 
  
      cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Log out 
  
    }); 
  
  });