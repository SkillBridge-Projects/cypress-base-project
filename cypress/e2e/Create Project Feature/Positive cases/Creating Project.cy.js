describe('Create Project Feature', () => {
  
    // Step 1: Login to the site
    it('should log in to the site as an Admin', () => {
        cy.visit('http://localhost:8080/authenticate'); // Visit the login page
        cy.wait(1000); // Wait for the page to load
  
        cy.get('input[name="email"]').type('test@mail.com'); // Enter email
        cy.wait(1000); // Wait to ensure input is typed
  
        cy.get('input[name="password"]').type('test'); // Enter password
        cy.wait(1000); // Wait to ensure input is typed
  
        cy.get('button[type="submit"]').click(); // Click the login button
        cy.wait(1000); // Wait for login to complete
    });
  
    // Step 2: Open the "Create Project" form
    it('should open the create project form', () => {
        cy.get('[data-testid="Navbar:left"]').realHover().wait(1000); // Hover over the sidebar to reveal options
        cy.get('[data-testid="Navbar:create-project"]').realHover().click(); // Click on the "Create Project" option
        cy.wait(1000); // Wait for the form to appear
    });
  
    // Step 3: Fill out and submit the "Create Project" form
    it('should create a new project with validation checks', () => {
        // Enter project details
        cy.get('[data-testid="create project:Name"]').type('QA Project'); // Enter the project name
        cy.get('[data-testid="create project:URL"]').type('http://example.com'); // Enter the project URL (optional)
        cy.xpath('//div[@class="ql-editor ql-blank"]').type('This is a QA project'); // Enter project description (optional)
        
        // Select a category
        cy.get('[data-testid="select:category"]').realHover().click(); // Open the category dropdown
        cy.xpath("//div[@class='sc-hzDkRC OIdAg']").contains('Software').click(); // Choose 'Software' category
  
        // Save the project
        cy.get('[data-testid="create project:Create"]').click(); // Click on the create button
        cy.wait(1000); // Wait for the project to be created
  
        // Verify success message
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div")
            .should('be.visible')
            .and('contain', 'Changes have been saved successfully.'); // Check for success message
        cy.wait(1000); // Wait to ensure project creation completes
    });
  
    // Step 4: Verify project creation and navigate to the projects dropdown
    it('should verify the project creation and navigate to the projects dropdown', () => {
        cy.get('[data-testid="sidebar:projects"]').realHover().click().wait(1000); // Open the projects dropdown
        cy.get('[data-testid="sidebar:projects"]').click(); // Close the dropdown
        cy.wait(1000); // Wait to ensure navigation completes
    });
  
    // Step 5: Logout from the application
    it('should log out from the application', () => {
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible
  
        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar
        cy.wait(1000); // Wait to ensure hover effect completes
  
        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Click on the logout button
        cy.wait(1000); // Wait to ensure logout completes
    });
  
  });
  
