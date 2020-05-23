export default class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  signUp(email, password, name) {
    return fetch(`${this.baseUrl}signup`, {
      method: "POST",
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
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
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
  }

  me() {
    return fetch(`${this.baseUrl}users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  logout() {
    return fetch(`${this.baseUrl}logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  saveArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this.baseUrl}articles`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  deleteArticle(id) {
    return fetch(`${this.baseUrl}articles/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  getArticles() {
    return fetch(`${this.baseUrl}articles`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    /* .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    }); */
  }
}
