export default class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  signUp(email, password, name) {
    return fetch(`${this.baseUrl}signup`, {
      method: 'POST',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((res) => res.json());
  }

  signIn(email, password) {
    return fetch(`${this.baseUrl}signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
  }

  me() {
    return fetch(`${this.baseUrl}users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  logout() {
    return fetch(`${this.baseUrl}logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
