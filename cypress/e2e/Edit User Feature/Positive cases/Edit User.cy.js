describe('Edit user Feature', () => {  
    before(() => { 
      cy.fixture('UserEdit.json').then((loginData) => { 
        cy.visit('http://localhost:8080/authenticate'); 
        cy.get('input[name="email"]').type(loginData.username); 
        cy.wait(1000);
        cy.get('input[name="password"]').type(loginData.password);
        cy.wait(1000); 
        cy.get('button[type="submit"]').click(); 
        cy.wait(1000);
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div") 
          .should("be.visible") 
          .and("contain", loginData.expected); 
          cy.wait(1000);
        cy.xpath("//div[@class='sc-hqyNC iwIKiC']").click(); 
      }); 
    }); 
   
    it('should contains the Users option', () => { 
      cy.xpath("//div[@class='sc-epnACN hnjsOo']").and("contain", "Users"); 
      cy.xpath("//a[@href='/project/users']").click(); 
      cy.wait(1000);
    }); 
   
    it('select the user and edit the User', () => { 
      cy.xpath("//div[4]//div[2]//button[1]").click(); 
      cy.get('[data-testid="UserEdit:Form"]').should("be.visible"); 
      cy.wait(1000);
      cy.get('[data-testid="form-field:name"]').clear().type('John');
      cy.wait(1000); 
      cy.get('input[name="email"]').should("be.disabled"); 
      cy.get('[data-testid="form-field:isAdmin"]').click(); 
      cy.xpath("//div[@class='sc-csuQGl dGexrQ']").first().click(); 
      cy.wait(1000);
      cy.get('[data-testid="form-field:projects"]').click(); 
      cy.xpath("//div[@class='sc-csuQGl dGexrQ']").first().click(); 
      cy.wait(1000);
      cy.get('[data-testid="UserEdit:Edit User-button"]').click(); 
      cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div") 
        .should("be.visible") 
        .and("contain.text", "User John has been successfully created"); 
      cy.wait(1000);
      cy.reload(); 
      cy.wait(1000);
      cy.url().should('eq', 'http://localhost:8080/project/users'); 
      cy.contains('Kanban Board').should('be.visible'); 
      cy.wait(1000);
    }); 

    it('verifying the user is edited and revertbacking the changes', () => {  

        cy.xpath("//div[4]//div[2]//button[1]").click();  

        cy.get('[data-testid="UserEdit:Form"]').should("be.visible");  

        cy.wait(1000); 

        cy.get('[data-testid="form-field:name"]').clear().type('Admin');  

        cy.wait(1000); 

        cy.get('input[name="email"]').should("be.disabled");  

        cy.get('[data-testid="form-field:isAdmin"]').click();  

        cy.xpath("//div[@class='sc-csuQGl dGexrQ']").first().click();  

        cy.wait(1000); 

        cy.xpath("//i[@class='sc-bdVaJa iEcsva']").click({ multiple: true, force: true });  

        cy.get("[data-testid='UserEdit:Form']").click();  

        cy.get('[data-testid="UserEdit:Edit User-button"]').click();  

        cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div")  

          .should("be.visible")  

          .and("contain.text", "User Admin has been successfully created");  

        cy.wait(1000); 

        cy.reload();  

        cy.wait(1000); 

        cy.url().should('eq', 'http://localhost:8080/project/users');  

        cy.contains('Kanban Board').should('be.visible');  

        cy.wait(1000); 

      });  

      after(() => {  

        cy.get('[data-testid="Navbar:left"]').should('be.visible');  

        cy.get('[data-testid="Navbar:left"]').realHover();  

        cy.wait(1000);  

        cy.get('[data-testid="Navbar:logout"]').realHover().click();  

    });  

});