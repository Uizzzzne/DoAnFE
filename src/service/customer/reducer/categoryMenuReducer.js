import * as actionType from "../constant/actionType/categoryMenuActionType";

const categoryMenuReducer = (state = [], action) => {

    switch (action.type) {
        case actionType.SET_CATEGORIES:
            let {payload} = action;
            state = payload;
            return [...state];
        default:
            return state;
    }



}

export default categoryMenuReducer;