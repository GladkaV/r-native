const url = 'https://jsonplaceholder.typicode.com';
const getUsers = () => {
    return fetch(url + '/users')
        .then(res => res.json())
}

export {getUsers};