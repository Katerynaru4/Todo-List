import { renderTasks } from './renderTasks.js';
import { initTodoListHandlers } from './TodoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
