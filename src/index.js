import './todoList.scss'
import { renderTasks } from './scripts/renderTasks.js';
import { initTodoListHandlers } from './scripts/TodoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
