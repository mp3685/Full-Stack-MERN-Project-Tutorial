import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import api from './api';

export default combineReducers({ posts, auth, api });