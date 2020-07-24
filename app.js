/** @format */

const searchBar_EL = document.querySelector('#search-user'),
  gitHub = new Github(),
  ui = new UI();

searchBar_EL.addEventListener('keyup', (e) => {
  let user = e.target.value;
  if (user !== '') {
    gitHub.getUser(user).then((userData) => {
      if (userData.profile.message === 'Not Found') {
        ui.showNotFound();
        //Show alert not found
      } else {
        ui.getProfile(userData.profile);
        ui.getRepos(userData.repos);
        console.log(userData.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
