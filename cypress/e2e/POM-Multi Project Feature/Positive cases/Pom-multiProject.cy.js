import MultiProject from "../../../Page objects/POM-Multi-Project.js"; 

describe("Multi Project Feature using POM", () => { 

  localStorage.clear(); 

  it("login to the Application", () => { 

    cy.visit('http://localhost:8080/authenticate'); 

    const ln = new MultiProject(); // Create an instance of the class 

    // Login process 

    ln.setUserMail("test@mail.com"); 

    ln.setPassword("test"); 

    ln.ClickSubmit(); 

    ln.verifyLogin(); 

    ln.CloseToast(); 

    // Navigate and edit user 

    ln.VerifyUsers(); 

    ln.NavUsers(); 

    ln.EditUser(); 

    ln.VerifyUserEdit(); 

    // Assign a project 

    ln.SelectProject(); 

    ln.SelectFirstProject(); 

    ln.ClickEditUserBtn(); 

    ln.VerifyUserEditToast(); 

    // Deselect project and save changes 

    ln.EditUser(); 

    ln.VerifyUserEdit(); 

    ln.ProjectField(); 

    ln.DeselectProject(); 

    ln.CloseDropdown(); 

    ln.ClickEditUserBtn(); 

    ln.VerifyUserEditToast(); 

    // Logout process 

    ln.SideBar(); 

    ln.SideBarHover(); 

    ln.Logout(); 

  }); 

});