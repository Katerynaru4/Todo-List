import { createTask } from './tasksGateway.js';
import { renderTasks } from './renderTasks.js';

export const onCreateTask = () => {
  const taskInputElem = document.querySelector('.task-input');
  if (taskInputElem.value === '') return;

  const newTask = {
    text: taskInputElem.value,
    creationDate: new Date().toISOString(),
    done: false,
    finishDate: null,
  };
  taskInputElem.value = '';

  createTask(newTask).then(() => renderTasks());
};
