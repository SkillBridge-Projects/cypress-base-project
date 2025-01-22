import MultiProject from "../../../Page objects/POM-case2.js";

describe("Multi Project Feature using POM",()=>{

localStorage.clear();
it("login to the Application",()=>{
 
 cy.visit('http://localhost:8080/authenticate')

    const ln=new MultiProject();
    ln.setUserMail("test@mail.com")
    ln.setPassword("test")
    ln.ClickSubmit();
    ln.verifyLogin();
    ln.CloseToast();
    ln.VerifyUsers();
    ln.NavUsers();
    ln.EditUser();
    ln.VerifyUserEdit();
    ln.SelectProject();
    ln.SearchDummyProject();
    ln.ValidateSearch();
    ln.CloseDropdown();
    ln.ClickCloseBtn();
    ln.SideBar();
    ln.SideBarHover();
    ln.Logout();


})

});