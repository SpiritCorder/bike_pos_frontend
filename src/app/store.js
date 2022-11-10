import {configureStore} from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import usersReducer from '../features/users/usersSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer
    },
    devTools: true
})

export default store;