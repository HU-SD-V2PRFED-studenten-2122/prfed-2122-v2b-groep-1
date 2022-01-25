import {
    ADD_USER,
    DELETE_USER,
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

        default:
            return state;

    }
}





































