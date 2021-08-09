import { onCreateTask } from './createTask.js';
import { changeStatusHandler } from './updateTask.js';

export const initTodoListHandlers = () => {
  const createTaskBtnElem = document.querySelector('.create-task-btn');
  createTaskBtnElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', changeStatusHandler);
};