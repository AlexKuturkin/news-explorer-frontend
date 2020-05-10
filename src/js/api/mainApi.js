export default class MainApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        // this.method = method;
    }

    signUp(email, password, name) {
        // console.log(email, password, name)
        return fetch(this.baseUrl + 'signup', {
            method: 'POST',
            // credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
            })
        })
            .then(res => res.json());

        /* .then(res => {
            console.log(res.ok);
            if (res.ok) {
                console.log('ok', res)
                return res.json();
            }
            return Promise.reject(res);
        }) 
         .catch(err => {
            console.log(err)
        }) */
    }

    signIn(email, password) {
        return fetch(this.baseUrl + 'signin', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(res => res.json());

        /*     .then(res => {
                console.log(res);
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res);
            })
            .catch(err => {
                console.log(err)
            }) */
    }

    me() {
        return fetch(this.baseUrl + 'users/me', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json());
    }
}