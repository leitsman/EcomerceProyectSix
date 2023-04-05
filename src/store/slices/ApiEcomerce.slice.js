import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

const endpoint = "https://ecommerce-proyect.onrender.com"

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
    return axios.get(`${endpoint}/products`)
        .then((res) => dispatch(setApiEcomerce(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const getSearchThunk = (theSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`${endpoint}/products?headline=${theSearch}`)
        .then((res) => dispatch(setApiEcomerce(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const getCategoryThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`${endpoint}/products?category=${id}`)
        .then((res) => dispatch(setApiEcomerce(res.data)))
        .catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setApiEcomerce } = ApiEcomerceSlice.actions;

export default ApiEcomerceSlice.reducer;
