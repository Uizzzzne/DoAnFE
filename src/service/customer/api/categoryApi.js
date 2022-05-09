import apiService from "../../util/ApiService";
import * as categoryApiUrl from "../constant/apiUrl/categoryApiUrl";
import * as queryString from "query-string";


export const findAll = () => {
    return apiService.get(categoryApiUrl.FIND_ALL);
}

