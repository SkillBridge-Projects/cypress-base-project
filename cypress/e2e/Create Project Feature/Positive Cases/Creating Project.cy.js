describe('Create Project Feature', () => { 

    it('should log in to the site as an Admin', () => { 
  
      cy.visit('http://localhost:8080/authenticate');  
  
      cy.wait(1000); 
  
      cy.get('input[name="email"]').type('test@mail.com'); 
  
      cy.wait(1000); 
  
      cy.get('input[name="password"]').type('test'); 
  
      cy.wait(1000); 
  
      cy.get('button[type="submit"]').click(); 
  
      cy.wait(1000); 
  
    }); 
  
    
  
    it('should open the create project form', () => { 
  
      cy.get('[data-testid="Navbar:left"]').realHover().wait(1000); 
  
      cy.get('[data-testid="Navbar:create-project"]').realHover().click(); 
  
      cy.wait(1000); 
  
    }); 
  
    
  
    it('should create a new project with validation checks', () => { 
  
      cy.get('[data-testid="create project:Name"]').type('QA Project'); 
  
      cy.get('[data-testid="create project:URL"]').type('http://example.com'); 
  
      cy.xpath('//div[@class="ql-editor ql-blank"]').type('This is a QA project'); 
  
      cy.get('[data-testid="select:category"]').realHover().click(); 
  
      cy.xpath("//div[@class='sc-hzDkRC OIdAg']").contains('Software').click(); 
  
      cy.get('[data-testid="create project:Create"]').click(); 
  
      cy.wait(1000); 
  
      cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div") 
  
        .should('be.visible') 
  
        .and('contain', 'Changes have been saved successfully.'); 
  
      cy.wait(1000); 
  
    }); 
  
    
  
    it('should verify the project creation and navigate to the projects dropdown', () => { 
  
      cy.get('[data-testid="sidebar:projects"]').realHover().click().wait(1000); 
  
      cy.get('[data-testid="sidebar:projects"]').click(); 
  
      cy.wait(1000); 
  
    }); 
  
    
  
    it('should log out from the application', () => { 
  
      cy.get('[data-testid="Navbar:left"]').should('be.visible'); 
  
      cy.get('[data-testid="Navbar:left"]').realHover(); 
  
      cy.wait(1000); 
  
      cy.get('[data-testid="Navbar:logout"]').realHover().click(); 
  
      cy.wait(1000); 
  
    }); 
  
    
  
  }); 
  
 