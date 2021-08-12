import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

const changeStatusHandler = (e) => {
  const tasksList = getItem('tasksList');
  const taskId = e.target.dataset.taskId;
  const done = e.target.checked;

  const { text, creationDate } = tasksList.find((task) => task.id === taskId);

  const updatedTask = {
    text,
    creationDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
const deleteSelectedTask = (id) => {
  deleteTask(id)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
export const onClickTask = (e) => {
  const taskId = e.target.dataset.taskId;
  if (!taskId) return;

  if (e.target.className === 'list-item__delete-btn')
    deleteSelectedTask(taskId);
  if (e.target.className === 'list-item__checkbox') changeStatusHandler(e);
};
