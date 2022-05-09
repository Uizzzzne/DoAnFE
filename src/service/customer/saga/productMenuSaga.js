import {call, delay, put, select} from "redux-saga/effects";
import * as productMenuActionType from "../action/productMenuAction";
import * as  productApi from "../api/productApi";
import {notifyError} from "../../util/notify";


export function* fetchFindAll() {
    let response = yield call(productApi.findAll);

    let {status, data} = response;

    if (status === 200) {
        console.log(data)
        yield put(productMenuActionType.setPruducts(data));
    } else {
        notifyError("Có lỗi xảy ra");
    }

}