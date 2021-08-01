// Intantiate Github
// ----------------------------------------------------------------------------
const github = new Github();
// ----------------------------------------------------------------------------

// Init UI
// ----------------------------------------------------------------------------
const ui = new UI();
const searchUser = document.getElementById("searchUser");
// ----------------------------------------------------------------------------

// Search user Event Listener
// ----------------------------------------------------------------------------
searchUser.addEventListener("keyup", (e) => {
  // Get input Text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUsers(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
// ----------------------------------------------------------------------------
