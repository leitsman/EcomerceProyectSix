import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

const endpoint = "http://localhost:8080"

export const accessSlice = createSlice({
    name: 'access',
    initialState: [],
    reducers: {
        setAccess: (state, action) => {
            return action.payload
        }
    }
})
export const getAccessThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`${endpoint}/purchases`, getConfig())
        .then((res) => dispatch(setAccess(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setAccess } = accessSlice.actions;

export default accessSlice.reducer;
