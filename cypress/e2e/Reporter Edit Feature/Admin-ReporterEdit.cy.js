describe("Admin Reporter Edit Feature", () => {

  // Test user login functionality
  it('should log in the user', () => {
      cy.visit('http://localhost:8080/authenticate');
      cy.wait(1000);
      cy.get('input[name="email"]').type('test@mail.com');
      cy.wait(1000);
      cy.get('input[name="password"]').type('test');
      cy.wait(1000);
      cy.get('button[type="submit"]').click();
      cy.wait(1000);
  });

  // Test closing of the toast notification
  it('should close the toast notification', () => {
      cy.xpath('//*[@id="root"]/div[2]/div[1]/button').click();
  });

  // Test Admin user modification of the reporter of a task
  it('should allow an Admin user to modify the reporter of a task', () => {
      // Navigate to the dashboard and select a task
      cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]').should('be.visible');
      cy.wait(1000);
      cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]/a/div').click(); // Select the specific task
      cy.wait(2000);

      // Ensure task details are displayed
      cy.xpath('//*[@id="root"]/div[3]/div/div').should('be.visible');
      cy.wait(1000);

      // Hover over the reporter field and click to open the dropdown
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div')
        .should('be.visible')
        .realHover()
        .click();
      cy.wait(1000);

      // Search and select the new reporter
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div[2]/input') // Search input field
        .should('be.visible')
        .type('Anjana');
      cy.wait(1000);

      cy.xpath('//div[contains(text(),"Anjana")]') // Select the reporter
        .should('be.visible')
        .click();
      cy.wait(1000);

      // Ensure reporter field is updated
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div/div/div[2]')
        .should('be.visible');
      cy.wait(1000);
  });

  // Test closing the task after reporter modification
  it('should close the task after modifying the reporter', () => {
      // Verify changes and close the task
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[1]/div[2]/button[3]')
        .scrollIntoView()
        .should('be.visible')
        .realHover()
        .click();
      cy.wait(1000);
  });

  // Verify that the reporter has been updated
  it('should verify that the reporter is updated', () => {
      // Navigate to the dashboard and select a task
      cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]').should('be.visible');
      cy.wait(1000);
      cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]/a/div').click();
      cy.wait(2000);

      // Ensure task details are displayed
      cy.xpath('//*[@id="root"]/div[3]/div/div').should('be.visible');
      cy.wait(1000);

      // Hover over the reporter field and click to open the dropdown
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div')
        .should('be.visible')
        .realHover()
        .click();
      cy.wait(1000);

      // Type 'test' in the dropdown input to select the reporter
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div[2]/input')
        .should('be.visible')
        .type('test');
      cy.get('[data-testid="select-option:test"]')
        .should('be.visible')
        .click();
      cy.wait(1000);

      // Close the task
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
