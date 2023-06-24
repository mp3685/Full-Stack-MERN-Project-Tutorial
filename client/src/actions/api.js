import { GET_GOOGLE_API } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getGoogleAPI = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGoogleAPI();

        dispatch({ type: GET_GOOGLE_API, payload: data });
    } catch (error) {
        console.log(error);
    }
}