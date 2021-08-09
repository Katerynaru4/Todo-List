import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const taskInputElem = document.querySelector('.task-input');
  if (taskInputElem.value === '') return;
  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text: taskInputElem.value,
    creationDate: new Date(),
    done: false,
    finishDate: null,
    id: tasksList.length + 1,
  });
  taskInputElem.value = '';

  setItem('tasksList', newTasksList);
  renderTasks();
};
