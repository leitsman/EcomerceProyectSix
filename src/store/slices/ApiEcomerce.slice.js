import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

let endpoint = "http://localhost:8080"

export const ApiEcomerceSlice = createSlice({
    name: 'ApiEcomerce',
    initialState: [],
    reducers: {
        setApiEcomerce: (state, action) => {
            return action.payload
        }
    }
})

export const getEcomerceThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
        .then((res) => dispatch(setApiEcomerce(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const getSearchThunk = (theSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${theSearch}`)
        .then((res) => dispatch(setApiEcomerce(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const getCategoryThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
        .then((res) => dispatch(setApiEcomerce(res.data.data.products)))
        .catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setApiEcomerce } = ApiEcomerceSlice.actions;

export default ApiEcomerceSlice.reducer;
