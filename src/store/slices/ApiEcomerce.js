import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
    // dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
        .then((res) => dispatch(setApiEcomerce(res.data.data.products)))
    // .finally(() => dispatch(setIsLoading(false)));
}
export const { setApiEcomerce } = ApiEcomerceSlice.actions;

export default ApiEcomerceSlice.reducer;
