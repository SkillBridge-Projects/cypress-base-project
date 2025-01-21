describe('Multi Project Selection for Users Feature', () => { 

    before(() => { 
  
      // Clear local storage and load fixture data 
  
      localStorage.clear(); 
  
      cy.fixture('UserEdit.json').then((loginData) => { 
  
        // Use the fixture data to log in 
  
        cy.visit('http://localhost:8080/authenticate'); // visit the login page 
  
        // Enter email and password 
  
        cy.get('input[name="email"]').type(loginData.username); 
  
        cy.wait(1000); 
  
        cy.get('input[name="password"]').type(loginData.password); 
  
        cy.wait(1000); 
  
        // Submit the login form 
  
        cy.get('button[type="submit"]').click(); 
  
        cy.wait(1000); 
  
        // Verify login was successful 
  
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should("be.visible").and("contain", loginData.expected); 
  
        cy.wait(1000); 
  
        // Close the toast message 
  
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']").click(); 
  
        cy.wait(1000); 
  
      }); 
  
    }); 
  
    it('should contain the Users option', () => { 
  
      // Verify 'Users' option is present in the sidebar 
  
      cy.xpath("//div[@class='sc-epnACN hnjsOo']").and("contain", "Users"); 
  
      // Click to navigate to the Users page 
  
      cy.xpath("//a[@href='/project/users']").click(); 
  
      cy.wait(1000); 
  
    }); 
  
    it('select the user and add the project', () => { 
  
      // Click the button to edit the user 
  
      cy.xpath("//body[1]/div[1]/div[2]/div[2]/div[5]/div[2]/button[1]").click(); 
  
      // Verify the User Edit form is visible 
  
      cy.get('[data-testid="UserEdit:Form"]').should("be.visible"); 
  
      cy.wait(1000); 
  
      // Debugging example 
  
      cy.get('[data-testid="form-field:projects"]').debug(); 
  
      // Click to select multiple projects 
  
      cy.xpath("//div[@class='sc-gipzik kSIViy']").click({multiple: true, force: true}); 
  
      cy.wait(1000); 
  
      // Select the first project from the list 
  
      cy.xpath("//div[@class='sc-csuQGl dGexrQ']").first().click(); 
  
      cy.wait(1000); 

      // Click to submit the changes 
  
      cy.get('[data-testid="UserEdit:Edit User-button"]').click(); 
  
      // Verify success message is displayed 
  
      cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should("be.visible").and("contain.text", "User Riya has been successfully created"); 
  
      cy.wait(1000); 

      // Reload the page 
  
      cy.reload(); 
  
      cy.wait(1000); 
  
      // Verify the URL 
  
      cy.url().should('eq', 'http://localhost:8080/project/users'); 
  
      // Verify specific element is visible after reload 
  
      cy.contains('Kanban Board').should('be.visible'); 
  
      cy.wait(1000); 
  
    }); 
  
    it('verifying the projects are added and reverting the changes', () => { 
  
      // Click the button to edit the user again 
  
      cy.xpath("//body[1]/div[1]/div[2]/div[2]/div[5]/div[2]/button[1]").click(); 
  
      // Verify the User Edit form is visible 
  
      cy.get('[data-testid="UserEdit:Form"]').should("be.visible"); 
  
      cy.wait(1000); 

      // Pause the test here for manual inspection 
  
      cy.pause(); 
  
      // Verify the projects field 
  
      cy.get('[data-testid="form-field:projects"]'); 
  
      // Click to deselect the projects 
  
      cy.xpath("//div[@class='sc-iRbamj jfNjNG']//div[1]//i[1]").click({multiple: true, force: true}); 
  
      // Click to close the dropdown 
  
      cy.get('[data-testid="UserEdit:Form"]').click(); 
  
      cy.wait(1000); 
  
      // Click to submit the changes 
  
      cy.get('[data-testid="UserEdit:Edit User-button"]').click(); 
  
      // Verify success message is displayed 
  
      cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should("be.visible").and("contain.text", "User Riya has been successfully created"); 
  
      cy.wait(1000); 

      // Reload the page 
  
      cy.reload(); 
  
      cy.wait(1000); 
  
      // Verify the URL 
  
      cy.url().should('eq', 'http://localhost:8080/project/users'); 
  
      // Verify specific element is visible after reload 
  
      cy.contains('Kanban Board').should('be.visible'); 
  
      cy.wait(1000); 
  
    }); 

    after(() => { 
  
      // Ensure sidebar is visible 
  
      cy.get('[data-testid="Navbar:left"]').should('be.visible'); 

      // Hover over the sidebar to open it 
  
      cy.get('[data-testid="Navbar:left"]').realHover(); 
  
      cy.wait(1000); // Wait to ensure hover effect completes 
  
      // Hover over the logout button and click to log out 
  
      cy.get('[data-testid="Navbar:logout"]').realHover().click(); 
  
    }); 
  
  });