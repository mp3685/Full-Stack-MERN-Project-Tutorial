import { GET_GOOGLE_API } from '../constants/actionTypes';

const apiReducer = (api = null, action) => {
    switch (action.type) {
        case GET_GOOGLE_API:
            return action.payload;
        default:
            return api;
    }
}

export default apiReducer;