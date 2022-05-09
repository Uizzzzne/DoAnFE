import * as actionTypes from "../constant/actionType/brandActionType";

const brandReducer = (state = [], action) => {

    switch (action.type) {

        case actionTypes.SET_BRANDS:
            let {payload} = action;
            state = payload;
            return [...state];

        default:
            return [...state];

    }

}

export  default brandReducer;
