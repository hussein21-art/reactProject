

import { DELETE_USER, GET_USERS } from "../constants/action-types";

const initalState = {
    users: [],
    active: true
}
function rootReducer( state = initalState, action ){
    switch( action.type )
    {
        case GET_USERS: 
        {
            if( state.active )            
            {
                return { 
                users: action.users,
                active: false
                };
            }
            return state;
        }

        case DELETE_USER:
            const myUser = state.users;
            myUser.splice( action.i, 1 );
            return {
                users: [...myUser]
            };
        default : 
        return state;
    }    
}

export default rootReducer;
