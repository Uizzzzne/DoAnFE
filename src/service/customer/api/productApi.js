import apiService from "../../util/ApiService";
import * as productApiUrl from "../constant/apiUrl/productApiUrl";
import * as queryString from "query-string";


export const findAll = () => {
    return apiService.get(productApiUrl.FIND_ALL);
}

