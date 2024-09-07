// import {configureStore} from '@reduxjs/toolkit';
// import rootReducers from './reducer';
// const store = configureStore({
//     reducer: rootReducers,

// })

// export default store;
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from './reducer/handleCart';

const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
  },
});

export default store;
