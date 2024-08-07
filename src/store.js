import {configurationStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configurationStore({
    reducer: rootReducer,
});

export default store;
