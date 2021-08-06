'use strict';

const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const tasks = [
  {
    text: '5 Buy milk',
    id: 1,
    done: false,
    creationDate: new Date(2021, 7, 6, 9, 45),
    finishDate: null,
  },
  {
    text: '4 Pick up Tom from airport',
    id: 2,
    done: false,
    creationDate: new Date(2021, 7, 6, 10, 45),
    finishDate: null,
  },
  {
    text: '3 Visit party',
    id: 3,
    done: false,
    creationDate: new Date(2021, 7, 6, 11, 45),
    finishDate: null,
  },
  {
    text: '2 Visit doctor',
    id: 4,
    done: false,
    creationDate: new Date(2021, 7, 6, 12, 45),
    finishDate: null,
  },
  {
    text: '1 Buy meat',
    id: 5,
    done: false,
    creationDate: new Date(2021, 7, 6, 13, 45),
    finishDate: null,
  },
];

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => {
      if (a.done - b.done !== 0) {
        return a.done - b.done;
      }
      if (a.done) {
        return new Date(b.finishDate) - new Date(a.finishDate);
      }
      return new Date(b.creationDate) - new Date(a.creationDate);
    })
    .map(({ text, id, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.taskId = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const changeStatusHandler = (event) => {
  event.stopPropagation();
  if (!event.target.dataset.taskId) return;
  const checkedtask = tasks.find(
    (task) => task.id === Number(event.target.dataset.taskId)
  );
  checkedtask.done = !checkedtask.done;
  if (checkedtask.done) {
    checkedtask.finishDate = new Date();
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', changeStatusHandler);

const addTask = () => {
  if (taskInput.value === '') return;
  tasks.push({
    text: taskInput.value,
    id: tasks.length + 1,
    done: false,
    creationDate: new Date(),
    finishDate: null,
  });
  listElem.innerHTML = '';
  renderTasks(tasks);
  taskInput.value = '';
};

createTaskBtn.addEventListener('click', addTask);

renderTasks(tasks);
