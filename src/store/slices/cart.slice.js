import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'userCart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload
        }
    }
})
export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
        .catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}
export const postCartThunk = (bodyReceive) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', bodyReceive, getConfig())
        .then((res) => dispatch(getCartThunk())).catch(error => console.error(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}
export const postCheckoutThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(setCart([])))
        .finally(() => dispatch(setIsLoading(false)));
}
export const delCartThunk = (idRemove) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${idRemove}`, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
