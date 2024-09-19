describe('Non-Admin Reporter Edit Feature', () => {

  // Test login as a non-Admin user
  it('should log in as a non-Admin user', () => {
      cy.visit('http://localhost:8080/authenticate');
      cy.wait(1000);
      cy.get('input[name="email"]').type('anjanadevi@nexzera.in');
      cy.wait(1000);
      cy.get('input[name="password"]').type('anjana');
      cy.wait(1000);
      cy.get('button[type="submit"]').click();
      cy.wait(1000); // Wait for the login process to complete
  });

  // Test navigation to the dashboard and task selection
  it('should navigate to the dashboard and select a task', () => {
      cy.xpath('//*[@id="root"]/div[2]/div[1]/button', { timeout: 10000 })
        .should('be.visible')
        .realHover()
        .click();
      cy.wait(1000); // Wait for the dashboard to load

      cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]')
        .should('be.visible');
      cy.wait(1000); // Wait for the task list to load

      cy.xpath('//*[@id="root"]/div[2]/div[2]/div[4]/div[1]/div[2]/a/div')
        .click();
      cy.wait(2000); // Wait for the task details to load

      // Ensure task details are displayed
      cy.xpath('//*[@id="root"]/div[3]/div/div')
        .should('be.visible');
      cy.wait(1000); // Wait for the task details to render
  });

  // Test that the reporter field is not editable by checking for a "not-allowed" cursor
  it('should validate that the reporter field is not editable', () => {
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div')
        .should('be.visible');
      cy.wait(1000); // Wait for the reporter field to be visible

      cy.xpath('//*[@id="root"]/div[3]/div/div/div[2]/div[2]/div[6]/div/div')
        .should('be.visible')
        .trigger('mouseover')
        .then(($el) => {
          // Manually check the CSS property for cursor style
          expect($el).to.have.css('cursor', 'not-allowed');
        });
      cy.wait(1000); // Wait for any potential animations or render updates
  });

  // Test closing the task and logging out
  it('should close the task and log out', () => {
      // Verify task details are closed and return to the dashboard
      cy.xpath('//*[@id="root"]/div[3]/div/div/div[1]/div[2]/button[3]')
        .scrollIntoView() // Scroll the button into view
        .should('be.visible') // Ensure the button is visible
        .realHover()
        .click(); // Click to close the task
      cy.wait(1000);

      cy.xpath('//div[@data-testid="task-details"]').should('not.exist');
      cy.wait(1000);

      // Hover over the sidebar and log out
      cy.xpath('//*[@id="root"]/div[2]/aside')
        .should('be.visible')
        .realHover();
      cy.wait(1000);
      cy.xpath('//*[@id="root"]/div[2]/aside/div[2]')
        .realHover()
        .click(); // Click to log out
  });
});
