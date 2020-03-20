import { createAction } from '@reduxjs/toolkit';
import actions from './actions';

export const addToDo = createAction(actions.addTodo);
export const removeToDo = createAction(actions.removeTodo);
export const updateToDo = createAction(actions.updateTodo);
