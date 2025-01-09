describe('Create Story Feature using Admin', () => {   

    before(() => {   

        cy.visit('http://localhost:8080/authenticate');   

        cy.get('[data-testid="form-field:email"]').type('test@mail.com');   

        cy.get('[data-testid="form-field:password"]').type('test');   

        cy.get('[data-testid="form-field:login-button"]').click();   

    });   

  

    it('should collapse the sidebar', () => {   
    
        cy.get('[data-testid="sidebar:collapse-button"]').click();   

    });   

  

    it('should open the create story form', () => {   

        cy.get('[data-testid="Board:create-issue-button"]').click();   

    });   

  

    it('should fill the "Create Story" form and submit', () => {   

        cy.get('[data-testid="select:type"]').click().parent().find('div').contains('Story').click();   

        cy.wait(1000);  

        cy.get('[data-testid="Issue Create:short-summary"]').type('Working on a positive TestCase');   

        cy.get('[data-testid="form-field:description"]').type('Working on how to create a task functionality.');   

        cy.get('[data-testid="select:reporterId"]').realHover();   

        cy.wait(1000);  

        cy.get('[data-testid="select:userIds"]').click().parent().find('div').contains('test').click();   

        cy.wait(1000);  

        cy.get('[data-testid="select:priority"]').click().parent().find('div').contains('Highest').click();   

        cy.wait(1000);  

        cy.get('[data-testid="IssueCreate:create-issue-button"]').click();   

        cy.wait(1000);  

    });   

    it('should verify the story creation', () => {   

        cy.xpath("//div[@type='success']").should('be.visible').and('contain', 'Issue has been successfully created.');   

        cy.wait(1000);  

    });   

  

    after(() => {   

        cy.get('[data-testid="Navbar:left"]').should('be.visible'); // Ensure sidebar is visible   

        cy.get('[data-testid="Navbar:left"]').realHover(); // Hover over the sidebar to open it   

        cy.wait(1000); // Wait to ensure hover effect completes   

        cy.get('[data-testid="Navbar:logout"]').realHover().click(); // Hover over the logout button and click to log out   

    });    

});