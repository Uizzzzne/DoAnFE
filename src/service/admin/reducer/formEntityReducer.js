import * as actionType from "../constant/actionType/formEntityActionType";


const formEntityReducer = (state = {}, action) => {
    switch (action.type) {

        case actionType.SET_FORM_ENTITY:
            let {payload} = action;
            state = payload;
            return {...state};

        default:
            return state;
    }
}

export default formEntityReducer;