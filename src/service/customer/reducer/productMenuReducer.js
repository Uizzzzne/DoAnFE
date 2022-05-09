import * as actionType from "../constant/actionType/productMenuActionType";

const productMenuReducer = (state = [], action) => {

    switch (action.type) {
        case actionType.SET_PRODUCTS:
            let {payload} = action;
            state = payload;
            return [...state];
        default:
            return state;
    }



}

export default productMenuReducer;