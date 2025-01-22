class MultiProject
{
  txtUserMail='input[name="email"]';
  txtUserPassword='input[name="password"]';
  BtnSubmit='button[type="submit"]';
  VerLogin="//div[@class='sc-hqyNC iwIKiC']//div";
  ClToast="//div[@class='sc-hqyNC iwIKiC']";
  VerUsers="//div[@class='sc-epnACN hnjsOo']";
  NavigateUsers="//a[@href='/project/users']";
  EdUser="//body[1]/div[1]/div[2]/div[2]/div[5]/div[2]/button[1]";
  VerUserEdit='[data-testid="UserEdit:Form"]';
  SelProject="//div[@class='sc-gipzik kSIViy']";
  Srch="//input[@placeholder='Search']";
  ValSearch="//div[@class='sc-fBuWsC cCZiRX']";
  ClDropdown='[data-testid="UserEdit:Form"]';
  ClcloseBtn='[data-testid="UserEdit:Cancel-button"]';
  SdBar='[data-testid="Navbar:left"]';
  SdBarHover='[data-testid="Navbar:left"]';
  LogoutBtn='[data-testid="Navbar:logout"]';


  setUserMail(usermail)
  {
    cy.get(this.txtUserMail).type(usermail);
  }

  setPassword(password)
  {
    cy.get(this.txtUserPassword).type(password);
  }

  ClickSubmit()
  {
    cy.get(this.BtnSubmit).click();
  }
  
  verifyLogin()
  {
    cy.xpath(this.VerLogin).should("be.visible");
    cy.wait(1000);
  }

  CloseToast()
  {
    cy.xpath(this.ClToast).click();
    cy.wait(1000);
  }

  VerifyUsers(){
    cy.xpath(this.VerUsers).and("contain", "Users");
  }

  NavUsers(){
    cy.xpath(this.NavigateUsers).click();
  }

  EditUser(){
    cy.xpath(this.EdUser).click();
  }

  VerifyUserEdit(){
    cy.get(this.VerUserEdit).should("be.visible");
  }

  SelectProject(){
    cy.xpath(this.SelProject).click({multiple: true, force: true});
  }

  Search(){
    cy.xpath(this.Srch).type('Testing');
  }

  ValidateSearch(){
    cy.xpath(this.ValSearch).and('contain', 'No results');
    cy.wait(1000);
  }

  CloseDropdown(){
    cy.get(this.ClDropdown).click();
    cy.wait(1000);
  }

  ClickCloseBtn(){
    cy.get(this.ClcloseBtn).click();
    cy.wait(1000);
  }

  SideBar(){
    cy.get(this.SdBar).should('be.visible');
    cy.wait(1000);
  }

  SideBarHover(){
    cy.get(this.SdBarHover).realHover();
    cy.wait(1000);
  }

  Logout(){
    cy.get(this.LogoutBtn).realHover().click();
  }
}

export default MultiProject;