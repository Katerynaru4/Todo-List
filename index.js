'use strict';

const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const tasks = [
  {
    text: '5 Buy milk',
    id: 0.31709864797951631,
    done: false,
    creationDate: new Date(2021, 7, 6, 9, 45),
  },
  {
    text: '4 Pick up Tom from airport',
    id: 0.31709840797251632,
    done: false,
    creationDate: new Date(2021, 7, 6, 10, 45),
  },
  {
    text: '3 Visit party',
    id: 0.31709864797954533,
    done: false,
    creationDate: new Date(2021, 7, 6, 11, 45),
  },
  {
    text: '2 Visit doctor',
    id: 0.31709864738481634,
    done: false,
    creationDate: new Date(2021, 7, 6, 12, 45),
  },
  {
    text: '1 Buy meat',
    id: 0.31709454797951635,
    done: false,
    creationDate: new Date(2021, 7, 6, 13, 45),
  },
];

const changeTaskStatus = (id) => {
  const checkedtask = tasks.find((task) => task.id === Number(id));
  checkedtask.done = !checkedtask.done;
  if (checkedtask.done) {
    checkedtask.doneDate = new Date();
  }
  if (!checkedtask.done) {
    delete checkedtask.doneDate;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
};

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => {
      if (a.done - b.done) {
        return a.done - b.done;
      }

      if (a.done && b.done) {
        return b.doneDate - a.doneDate;
      }

      if (!a.done && !b.done) {
        return b.creationDate - a.creationDate;
      }
    })
    .map(({ text, id, done }, index) => {
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

listElem.addEventListener('click', (event) => {
  event.stopPropagation();
  if (event.target.dataset.taskId)
    changeTaskStatus(event.target.dataset.taskId);
});

const addTask = () => {
  if (taskInput.value === '') return;
  tasks.push({
    text: taskInput.value,
    id: Math.random(),
    done: false,
    creationDate: new Date(),
  });
  listElem.innerHTML = '';
  renderTasks(tasks);
  taskInput.value = '';
};

createTaskBtn.addEventListener('click', addTask);

renderTasks(tasks);
