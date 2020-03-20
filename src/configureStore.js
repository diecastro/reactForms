import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer as reduxFormReducer } from 'redux-form';

import logger from 'redux-logger';

import { todosReducer } from './reducers/todoReducer';

const reducer = {
  todos: todosReducer,
  form: reduxFormReducer
};

const middleware = [...getDefaultMiddleware(), logger];

const preloadedState = {
  todos: [
    {
      id: 1,
      description: 'Cook breakfast',
      completed: false
    },
    {
      id: 2,
      description: 'Exercise',
      completed: false
    }
  ],
};

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});
