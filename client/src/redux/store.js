import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slice/auth';
import { newsReducer } from './slice/news';

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
});

export default store;
