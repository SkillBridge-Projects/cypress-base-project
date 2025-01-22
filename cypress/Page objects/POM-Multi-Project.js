class MultiProject
{
  setUserMail(usermail)
  {
    cy.get('input[name="email"]').type(usermail);
  }

  setPassword(password)
  {
    cy.get('input[name="password"]').type(password);
  }

  ClickSubmit()
  {
    cy.get('button[type="submit"]').click();
  }
  
  verifyLogin()
  {
    cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should("be.visible");
    cy.wait(1000);
  }

  CloseToast()
  {
    cy.xpath("//div[@class='sc-hqyNC iwIKiC']").click();
    cy.wait(1000);
  }

  VerifyUsers(){
    cy.xpath("//div[@class='sc-epnACN hnjsOo']").and("contain", "Users");
  }

  NavUsers(){
    cy.xpath("//a[@href='/project/users']").click();
  }

  EditUser(){
    cy.xpath("//body[1]/div[1]/div[2]/div[2]/div[5]/div[2]/button[1]").click();
  }

  VerifyUserEdit(){
    cy.get('[data-testid="UserEdit:Form"]').should("be.visible");
  }

  SelectProject(){
    cy.xpath("//div[@class='sc-gipzik kSIViy']").click({multiple: true, force: true});
  }

  SelectFirstProject(){
    cy.xpath("//div[@class='sc-csuQGl dGexrQ']").first().click();
    cy.wait(1000);
  }

  ClickEditUserBtn(){
    cy.get('[data-testid="UserEdit:Edit User-button"]').click();
  }

  VerifyUserEditToast(){
    cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div").should("be.visible").and("contain.text", "User Riya has been successfully created");
      // Reload the page
      cy.reload();
      cy.wait(1000);
      // Verify the URL
      cy.url().should('eq', 'http://localhost:8080/project/users');
      // Verify specific element is visible after reload
      cy.contains('Kanban Board').should('be.visible');
      cy.wait(1000);
  }

  ProjectField(){
    cy.get('[data-testid="form-field:projects"]');
    cy.wait(1000);
  }

  DeselectProject(){
    cy.xpath("//div[@class='sc-iRbamj jfNjNG']//div[1]//i[1]").click({multiple: true, force: true});
    cy.wait(1000);
  }

  CloseDropdown(){
    cy.get('[data-testid="UserEdit:Form"]').click();
    cy.wait(1000);
  }

  SideBar(){
    cy.get('[data-testid="Navbar:left"]').should('be.visible');
  }

  SideBarHover(){
    cy.get('[data-testid="Navbar:left"]').realHover();
    cy.wait(1000);
  }

  Logout(){
    cy.get('[data-testid="Navbar:logout"]').realHover().click();
  }
}

export default MultiProject;