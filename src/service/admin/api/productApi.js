import * as productApiUrl from "../constant/apiUrl/productApiUrl";
import apiService from "../../util/ApiService";
import queryString from "query-string";

export const findAll = () => {
    return apiService.get(productApiUrl.FIND_ALL);
}

export const deleteById = id => {
    return apiService.delete(productApiUrl.DELETE_BY_ID + queryString.stringify({id}));
}

export const add = product => {
    return apiService.post(productApiUrl.ADD, product);
}
