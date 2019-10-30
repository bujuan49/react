import Cookie from 'js-cookie'
const fromat = (obj) => {
    return Object.entries(obj).map(item => `${item[0]}=${item[1]}`).join('&')
}
export default {
    get(url, data = {}) {
        return fetch(`${url}?${fromat(data)}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'authorization': Cookie.get('sessionid')
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject(response)
            }
        })
    },
    post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject(response)
            }
        })
    }
}