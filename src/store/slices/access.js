import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const accessSlice = createSlice({
    name: 'access',
    initialState: [],
    reducers: {
        setAccess: (state, action) => {
            return action.payload
        }
    }
})
export const accessThunk = () => (dispatch) => {
    // dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/purchases', getConfig())
        .then((res) => dispatch(setAccess(res.data)))
    // .finally(() => dispatch(setIsLoading(false)));
}

export const { setAccess } = accessSlice.actions;

export default accessSlice.reducer;
