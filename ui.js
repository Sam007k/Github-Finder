class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Show Profile of User
  // ----------------------------------------------------------------------------
  showProfile(user) {
    this.profile.innerHTML = `
       <div class="card card-body mb-3">
          <div class="row">
             <div class="col-md-3">
              <img class="img-fluid mb-2" src='${user.avatar_url}'>
              <a href="${user.html_url} target="_blank" class='btn btn-primary btn-block mb-4' style="width: 100%;">View Profile</a>
             </div>
             <div class='col-md-9'>
                 <span class='badge bg-primary'>Public Repos: ${user.public_repos}</span>
                 <span class='badge bg-secondary'>Public Gists: ${user.public_gists}</span>
                 <span class='badge bg-success'>Followers: ${user.followers}</span>
                 <span class='badge bg-info'>Following: ${user.following}</span>
                 <br><br>
                 <ul class="list-group">
                    <li class='list-group-item'>Company: ${user.company}</li>
                    <li class='list-group-item'>Website/Blog: ${user.blog}</li>
                    <li class='list-group-item'>Location: ${user.location}</li>
                    <li class='list-group-item'>Member Since: ${user.created_at}</li>
                 </ul>
             </div>
          </div>
       </div>
       <h3 class='page-heading mb-3'>Latest Repos</h3>
       <div id='repos'></div>
       `;
  }
  // ----------------------------------------------------------------------------

  // Show Repos of User
  // ----------------------------------------------------------------------------
  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
         <div class="card card-body mb-3">
            <div class="row">
                 <div class='col-md-6'>
                    <a href=${repo.html_url} target=_blank>${repo.name}>${repo.name}</a>
                 </div>
                 <div class='col-md-6'>
                     <span class='badge bg-secondary'>Stars: ${repo.stargazers_count}</span>
                     <span class='badge bg-primary'>Watchers: ${repo.watchers}</span>
                     <span class='badge bg-success'>Forks: ${repo.forks}</span>                    
                 </div>
            </div>
         </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }
  // ----------------------------------------------------------------------------

  // Show Alert
  // ----------------------------------------------------------------------------
  showAlert(message, className) {
    console.log("alert");
    // Clear remaining alert
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add Classes
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const conatainer = document.querySelector(".searchContainer");
    // Get Search Box
    const search = document.querySelector(".search");
    // Inser Alert
    conatainer.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }
  // ----------------------------------------------------------------------------

  // Clear Alert message
  // ----------------------------------------------------------------------------
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // ----------------------------------------------------------------------------

  // Clear Profile
  // ----------------------------------------------------------------------------
  clearProfile() {
    this.profile.innerHTML = "";
  }
  // ----------------------------------------------------------------------------
}
