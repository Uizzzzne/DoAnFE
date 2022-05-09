import  * as brandApiUrl from "../constant/apiUrl/brandApiUrl";
import apiService from "../../util/ApiService";
import queryString from "query-string";

export const findAll = () => {
    return apiService.get(brandApiUrl.FIND_ALL);

}

export const deleteId  = id  => {
    return apiService.delete(brandApiUrl.DELETE_BY_ID + queryString.stringify({id}));
}

export const add = (brand) => {
    return apiService.post(brandApiUrl.ADD, brand);
}