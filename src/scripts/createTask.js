import { createTask } from './tasksGateway';
import renderTasks from './renderTasks';

export default function onCreateTask() {
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
}
