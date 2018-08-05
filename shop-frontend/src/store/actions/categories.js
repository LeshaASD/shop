import axios from '../../axios-api';
import {FETCH_CATEGORIES_SUCCESS} from "./actionTypes";

const fetchCategoriesSuccess = categories => {
    return {type: FETCH_CATEGORIES_SUCCESS, categories};
};

export const fetchCategories = () => {
    return dispatch => {
        axios.get('/categories').then(
            response => dispatch(fetchCategoriesSuccess(response.data))
        )
    }
};