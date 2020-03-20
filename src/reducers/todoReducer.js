import { createReducer } from '@reduxjs/toolkit';

import { addToDo, removeToDo } from '../actions/todoActions';

const initialState = [];

export const todosReducer = createReducer(initialState, {
  [addToDo]: (state, action) => {
    state.push({id: state.length+1, ...action.payload});
  },
  [removeToDo]: (state, action) => state.filter(values => values.id !== action.payload)
});
