import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

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

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
