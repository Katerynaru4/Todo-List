import './todoList.scss';
import renderTasks from './scripts/renderTasks';
import initTodoListHandlers from './scripts/todoList';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
