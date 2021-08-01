class Github {
  constructor() {
    this.client_id = "dd19ea55c49aa5690aa5";
    this.client_secret = "a7267f7caeabd6a5eec07a826d38403baf7a947e";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  // Get Users
  // ----------------------------------------------------------------------------
  async getUsers(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
  // ----------------------------------------------------------------------------
}
