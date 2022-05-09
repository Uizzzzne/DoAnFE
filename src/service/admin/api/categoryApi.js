import * as categoryApiUrl from "../constant/apiUrl/categoryApiUrl";
import apiService from "../../util/ApiService";
import queryString from "query-string";

export const findAll = () => {
    return apiService.get(categoryApiUrl.FIND_ALL);
}

export const deleteById = id => {
    return apiService.delete(categoryApiUrl.DELETE_BY_ID + queryString.stringify({id}));
}

export const add = category => {
    return apiService.post(categoryApiUrl.ADD, category);
}
