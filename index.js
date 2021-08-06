const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const tasks = [
  { text: '1 Buy milk', done: false, date: new Date(2021, 08, 06, 9, 45) },
  {
    text: '2 Pick up Tom from airport',
    done: false,
    date: new Date(2021, 08, 06, 10, 45),
  },
  { text: '3 Visit party', done: false, date: new Date(2021, 08, 06, 11, 45) },
  { text: '4 Visit doctor', done: true, date: new Date(2021, 08, 06, 12, 45) },
  { text: '5 Buy meat', done: false, date: new Date(2021, 08, 06, 13, 45) },
];

const changeTaskStatus = (id) => {
  tasks[id].done = !tasks[id].done;
  listElem.innerHTML = '';
  renderTasks(tasks);
};

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => {
      if (a.done && b.done) return 0;
      if (a.done - b.done) return a.done - b.done;
      if (a.date - b.date) return a.date - b.date;
    })
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      listItemElem.dataset.taskId = index;
      tasks[index].id = index;

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      checkbox.addEventListener('click', () =>
        changeTaskStatus(listItemElem.dataset.taskId)
      );

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const addTask = () => {
  if (taskInput.value === '') return;
  tasks.push({
    text: taskInput.value,
    done: false,
    date: new Date(),
  });
  listElem.innerHTML = '';
  renderTasks(tasks);
  taskInput.value = '';
};

createTaskBtn.addEventListener('click', addTask);

renderTasks(tasks);
