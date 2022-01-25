export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';


export const addUser = (user) => {
    return {
        type: ADD_USER,
        user: user
    }
}

export const updateUser = (userId, naam, wachtwoord) => {
    return {
        type: UPDATE_USER,
        userId: userId,
        naam: naam,
        wachtwoord: wachtwoord
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        userId: id
    }
}
