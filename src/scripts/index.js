import { renderTasks } from './renderTasks.js';
import { setItem } from './storage.js';
import { getTasksList } from './tasksGateway.js';
import { initTodoListHandlers } from './TodoList.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') renderTasks();
};

window.addEventListener('storage', onStorageChange);
