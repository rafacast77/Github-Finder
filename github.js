/** @format */

class Github {
  constructor(client_Id, secret_key) {
    this.client_Id = '40ec4e7c458f046ad0f5';
    this.secret_key = '3b81f6a4be1a13d3623af8df69f9ac8f197bf2ff';
    this.repoCount = 5;
    this.sortRepos = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_Id}&client_secret=${this.secret_key}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.sortRepos}&client_id=${this.client_Id}&client_secret=${this.secret_key}`
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos,
    };
  }
}
