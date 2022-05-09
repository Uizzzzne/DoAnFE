import * as actionType from "../constant/actionType/categoryActionType";

const categoryReducer = (state = [], action) => {


    switch (action.type) {

        case actionType.SET_CATEGORIES:
            let {payload} = action;
            state = payload;
            return [...state];

        default:
            return [...state];
    }
}

export default categoryReducer;