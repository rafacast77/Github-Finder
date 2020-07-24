/** @format */

class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Builds HTML and loads profile into it.
  getProfile(profile) {
    this.profile.innerHTML = `
    <div class="card card-body">
    <div class="row">
      <div class="col-md-3">
        <img class=" img-fluid rounded" src="${profile.avatar_url}">
        <a href="${profile.html_url}" target="blank" class=" mt-2 mb-2 btn-block btn btn-primary ">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary">Public Repositories ${profile.public_repos}</span>
        <span class="badge badge-secondary">Public Gists ${profile.public_gists}</span>
        <span class="badge badge badge-success">Following ${profile.following}</span>
        <span class="badge badge-info">Follower ${profile.followers}</span>
        <br><br>
        <ul class=" list-group">
          <li class="list-group-item">Company: ${profile.company}</li>
          <li class="list-group-item">Blog: ${profile.blog}</li>
          <li class="list-group-item">Location: ${profile.location}</li>
          <li class="list-group-item">Created At: ${profile.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3 mt-2 "><strong> Latest Repos </strong></h3>
  <div id="repos"></div>
    `;
  }

  // Builds HTML and loads repos into it.
  getRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-6">
              <a href="${repo.html_url}" target="blank">${repo.name}</a>
            </div>
            <div class="col-6">
              <span class="badge badge-primary">Stars ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers ${repo.watchers_count}</span>
              <span class="badge badge badge-success">Forks ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
  }

  // Clears the profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // If profile not found
  showNotFound() {
    this.profile.innerHTML = `
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-2 text-muted">Not Found</h1>
      </div>
    </div>
    `;
  }
}
