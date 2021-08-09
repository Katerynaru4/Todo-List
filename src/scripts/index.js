import { renderTasks } from './renderTasks.js';
import { initTodoListHandlers } from './TodoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') renderTasks();
};

window.addEventListener('storage', onStorageChange);
