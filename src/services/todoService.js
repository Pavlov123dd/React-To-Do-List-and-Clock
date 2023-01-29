const API = 'https://6352c7b8a9f3f34c3748c588.mockapi.io/product/todo';

export const getList = () => fetch(API).then(data => data.json());

export const deleteItem = id =>
    fetch(API + `/${id}`, {method: 'DELETE'}).then(data => data.json());

export const updateItem = (id, obj) =>
    fetch(API + `/${id}`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(obj)
    })
        .then(data => data.json());


export const addItem = (obj) =>
    fetch(API, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(obj)
    })
        .then(data => data.json());