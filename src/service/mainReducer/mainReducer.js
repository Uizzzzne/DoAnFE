import {combineReducers} from "redux";
import categoryReducer from "../admin/reducer/categoryReducer";
import brandReducer from "../admin/reducer/brandReducer";
import formEntityReducer from "../admin/reducer/formEntityReducer";
import { reducer as forms } from 'redux-form';
import productReducer from "../admin/reducer/productReducer";
import categoryMenuReducer from "../customer/reducer/categoryMenuReducer";

const mainReducer = combineReducers({
    // admin
    categories: categoryReducer,
    brands : brandReducer,
    products : productReducer,
    form: forms,
    formEntity: formEntityReducer,
    // customer
    customerCategories: categoryMenuReducer
})

export default mainReducer;