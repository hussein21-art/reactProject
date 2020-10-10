import { DELETE_USER, GET_USERS } from "../constants/action-types";

export function deleteUser( id ) {
    return { 
        type: DELETE_USER,
        i: id };
}

const getUsers1 = ( theUsers ) => {
    return{ type: GET_USERS,
            users: theUsers };
}

export default getUsers1;