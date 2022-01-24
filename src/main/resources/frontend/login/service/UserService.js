import {store} from "./Appservice";
import {
    addUser as addUSER,
    deleteUser as deleteUSER,
    updateUser as updateUSER,
} from "./UserAction";

export class UserService {
    constructor() {
    }

    addUser(user) {
        store.dispatch(addUSER(user));
    }

    deleteUser(userId){
        store.dispatch(deleteUSER(userId));
    }

    updateUser(userId, naam, wachtwoord) {
        store.dispatch(updateUSER(userId, naam, wachtwoord));
    }


}