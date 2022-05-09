import {call, delay, put, select} from "redux-saga/effects";
import * as categoryMenuActionType from "../action/categoryMenuAction";
import * as  categoryApi from "../api/categoryApi";
import {notifyError} from "../../util/notify";


export function* fetchFindAll() {
    let response = yield call(categoryApi.findAll);

    let {status, data} = response;

    if (status === 200) {
        console.log(data)
        yield put(categoryMenuActionType.setCategories(data));
    } else {
        notifyError("Có lỗi xảy ra");
    }

}