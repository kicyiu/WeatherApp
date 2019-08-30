import { SET_CITY } from './../actions';

export const city = (state = {}, action) => {
    console.log("last state: ", state);
    console.log("action: ", action);
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.payload }
        default:
            return state;
    }
}