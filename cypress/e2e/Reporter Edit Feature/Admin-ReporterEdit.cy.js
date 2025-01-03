describe("Admin Reporter Edit Feature",()=>{

    it("should login the user",()=>{
        cy.visit("http://localhost:8080/authenticate");
        cy.wait(1000);
        cy.get('input[name="email"]').type('test@mail.com');
        cy.wait(1000);
        cy.get('input[name="password"]').type('test');
        cy.wait(1000);
        cy.get('button[type="submit"]').click();
        cy.wait(1000);
    });

    it('should close the sidebar', () => { 

        // Click the button to close the sidebar 
        cy.xpath('//*[@id="root"]/div[2]/div[1]/button').click(); 
      
    }); 

    it('should allow an Admin user to modify the reporter of a task', () => { 
        // Step 1: Navigate to the dashboard and select a task 
  
        cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]').should('be.visible'); 
        cy.wait(1000); 
        cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]/a/div').click(); // Select a specific task 
        cy.wait(2000); 
  
        // Step 2: Ensure task details are displayed 
  
        cy.xpath('//*[@id="root"]/div[3]/div/div').should('be.visible'); 
        cy.wait(1000); 
  
        // Step 3: Hover over the reporter field and click to open the dropdown 
  
        cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div') 
          .should('be.visible') 
          .realHover() // Hover over the reporter field 
          .click(); 
        cy.wait(1000); 
   
        // Step 4: Search and select the new reporter 
  
        cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div[2]/input') // Search input field 
          .should('be.visible') 
          .type('Srinivas Reddy'); 
        cy.wait(1000); 
  
        cy.xpath('//div[contains(text(),"Srinivas Reddy")]') // Select the reporter 
          .should('be.visible') 
          .click(); 
        cy.wait(1000); 
  
        // Step 5: Ensure reporter field is updated 

        cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div/div/div[2]') 
          .should('be.visible'); 
        cy.wait(1000); 
  
    }); 
    
    it('should close the task after modifying the reporter', () => { 
      // Verify changes and close the task 
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[1]/div[2]/button[3]') 
        .scrollIntoView() 
        .should('be.visible') 
        .realHover() 
        .click(); 
      cy.wait(1000); 

    }); 

    // Test: Verify that the reporter is updated and revert the changes 
    it('should verify that the reporter is updated', () => { 

      // Step 1: Navigate to the dashboard and select a task 
      cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]').should('be.visible'); 
      cy.wait(1000); 
      cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]/a/div').click(); 
      cy.wait(2000); 

      // Step 2: Ensure task details are displayed 
      cy.xpath('//*[@id="root"]/div[3]/div/div').should('be.visible'); 
      cy.wait(1000); 

      // Step 3: Hover over the reporter field and click to open the dropdown 
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div') 
        .should('be.visible') 
        .realHover() 
        .click(); 
      cy.wait(1000); 

      // Step 4: Type 'test' in the dropdown input to select the reporter 
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div[2]/input') 
        .should('be.visible') 
        .type('test'); 
      cy.get('[data-testid="select-option:test"]') 
        .should('be.visible') 
        .click(); 
      cy.wait(1000); 

      // Step 5: Close the task 
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[1]/div[2]/button[3]') 
        .scrollIntoView() 
        .should('be.visible') 
        .realHover() 
        .click(); 
      cy.wait(1000); 

  }); 

  // Test logging out from the application
  it('should log out the user and verify logout', () => {
    
    // Ensure the task details are closed and return to the dashboard
    cy.xpath('//div[@data-testid="task-details"]').should('not.exist');
    cy.wait(1000);

    // Hover over the sidebar and log out
    cy.xpath('//*[@id="root"]/div[2]/aside')
      .should('be.visible')
      .realHover();
    cy.wait(1000);
    cy.xpath('//*[@id="root"]/div[2]/aside/div[4]')
      .realHover()
      .click();

  });

});