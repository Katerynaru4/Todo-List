import onCreateTask from './createTask';
import onClickTask from './updateTask';

export default function initTodoListHandlers() {
  const createTaskBtnElem = document.querySelector('.create-task-btn');
  createTaskBtnElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onClickTask);
}
