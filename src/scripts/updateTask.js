import { renderTasks } from './renderTasks.js';
import { updateTask, deleteTask, getTasksList } from './tasksGateway.js';

const changeStatusHandler = (e) => {
  const taskId = e.target.dataset.taskId;
  const done = e.target.checked;

  getTasksList().then((tasksList) => {
    const { text, creationDate } = tasksList.find((task) => task.id === taskId);
    const updatedTask = {
      text,
      creationDate,
      done,
      finishDate: done ? new Date().toISOString() : null,
    };
    updateTask(taskId, updatedTask).then(() => renderTasks());
  });
};

const deleteSelectedTask = (id) => {
  deleteTask(id).then(() => renderTasks());
};

export const onClickTask = (e) => {
  const taskId = e.target.dataset.taskId;
  if (!taskId) return;

  if (e.target.className === 'list-item__delete-btn')
    deleteSelectedTask(taskId);
  if (e.target.className === 'list-item__checkbox') changeStatusHandler(e);
};
