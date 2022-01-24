import {
    ADD_USER,
    ADD_NEW_USER,
    DELETE_USER,
    DELETE_NEW_USER,
    UPDATE_USER
} from "./UserAction";

let initialState = {
    users: []
}

export const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            };

        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(
                    (user) => {
                        if (user.id === action.userId){
                            user.naam = action.naam;
                            user.wachtwoord = action.wachtwoord;
                        }
                        return user;

                    }
                )
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(
                    (user) => user.id !== action.userId
                )
            };

        case ADD_NEW_USER:
            return {
                ...state,
                users: state.users.map(
                    (user) => {
                        if (user.id === action.userId){
                            let gebruikers = []
                            if (user.newUsers != null) {
                                gebruikers = user.newUsers;
                            }
                            gebruikers.push(action.users);
                            user.newUsers = gebruikers;

                        }
                        return user;
                    }
                )
            };

        case DELETE_NEW_USER:
        return {
            ...state,
            users: state.users.map(
                (user) => {
                    if (user.id === action.userId){
                        user.newUsers = user.newUsers.filter(
                            (newUser) => newUser.id !== action.newUserId
                        )
                    }
                    return user
                }
            )
        };

        default:
            return state;

    }
}





































