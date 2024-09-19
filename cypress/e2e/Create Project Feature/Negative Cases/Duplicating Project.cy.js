// describe('Multiple Projects Management', () => {
//     // Step 1: Login to the site
//     it('should log in to the site', () => {
//         cy.visit('http://localhost:8080/authenticate'); // Visit the login page
//         cy.wait(1000); // Wait for the page to load
  
//         cy.get('input[name="email"]').type('test@mail.com'); // Enter email
//         cy.wait(1000); // Wait to ensure input is typed
  
//         cy.get('input[name="password"]').type('test'); // Enter password
//         cy.wait(1000); // Wait to ensure input is typed
  
//         cy.get('button[type="submit"]').click(); // Click the login button
//         cy.wait(1000); // Wait for login to complete
//     });
  
//     // Step 2: Create a new project with validation checks
//     it('should create a new project with validation checks', () => {
//         cy.get('[data-testid="Navbar:left"]').realHover().wait(1000); // Hover over the sidebar to collapse it
//         cy.get('[data-testid="Navbar:create-project"]').realHover().click(); // Click on the create project option
//         cy.wait(1000); // Wait for the create project form to appear
  
//         // Enter valid project details
//         cy.get('[data-testid="create project:Name"]').click().type('QA Project'); // Enter the project name
//         cy.get('[data-testid="create project:URL"]').type('http://example.com'); // Enter the project URL (optional)
//         cy.xpath('//div[@class="ql-editor ql-blank"]').type('This is a QA project'); // Enter the project description (optional)
//         cy.get('[data-testid="select:category"]').realHover().click(); // Select a category from the dropdown
//         cy.get('[data-testid="select-option:Software"]').click(); // Choose 'Software' category
  
//         // Save the project
//         cy.get('[data-testid="create project:Create"]').click().wait(1000); // Click on the create button and wait for the project to be created
//         cy.xpath("//div[@type='danger']")
//             .should('be.visible')
//             .and('contain', 'Something went wrong, please contact our support.'); // Verify success message
//         cy.wait(1000); // Wait to ensure project creation completes
//         cy.get('[data-testid="create project:Cancel"]').click().wait(1000);
//     });
  

//     // Step 3: Logout
//     it('logout',() => {
//         cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible
  
//         cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to open it
//         cy.wait(1000); // Wait to ensure hover effect completes
  
//         cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click on it
//         cy.wait(1000); // Wait to ensure logout completes
//     });
//   });
describe('Duplicating the Project and Validation Check', () => {
    // Step 1: Login to the site
    it('should log in to the site', () => {
        cy.visit('http://localhost:8080/authenticate'); // Visit the login page
        cy.wait(1000); // Wait for the page to load
  
        cy.get('input[name="email"]').type('test@mail.com'); // Enter email
        cy.wait(1000); // Wait to ensure input is typed
  
        cy.get('input[name="password"]').type('test'); // Enter password
        cy.wait(1000); // Wait to ensure input is typed
  
        cy.get('button[type="submit"]').click(); // Click the login button
        cy.wait(1000); // Wait for login to complete
    });

    // Step 2: Create a new project with validation checks
    it('should create a new project with validation checks', () => {
        cy.get('[data-testid="Navbar:left"]').realHover().wait(1000); // Hover over the sidebar to collapse it
        cy.get('[data-testid="Navbar:create-project"]').realHover().click(); // Click on the create project option
        cy.wait(1000); // Wait for the create project form to appear
  
        // Enter valid project details
        cy.get('[data-testid="create project:Name"]').click().type('QA Project'); // Enter the project name
        cy.get('[data-testid="create project:URL"]').type('http://example.com'); // Enter the project URL (optional)
        cy.xpath('//div[@class="ql-editor ql-blank"]').type('This is a QA project'); // Enter the project description (optional)
        cy.get('[data-testid="select:category"]').realHover().click(); // Select a category from the dropdown
        cy.get('[data-testid="select-option:Software"]').click(); // Choose 'Software' category

        // Save the project
        cy.get('[data-testid="create project:Create"]').click().wait(1000); // Click on the create button and wait for the project to be created
        cy.xpath("//div[@type='danger']")
            .should('be.visible')
            .and('contain', 'Something went wrong, please contact our support.'); // Verify error message
        cy.wait(1000); // Wait to ensure project creation completes
        cy.get('[data-testid="create project:Cancel"]').click().wait(1000); // Cancel the form
    });

    // Step 3: Logout
    it('should log out from the site', () => {
        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible
  
        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to open it
        cy.wait(1000); // Wait to ensure hover effect completes
  
        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click on it
        cy.wait(1000); // Wait to ensure logout completes
    });
});

