const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: false },
  { text: 'Buy meat', done: false },
];

const changeTaskStatus = (id) => {
  tasks[id].done = !tasks[id].done;
  tasks.sort((a, b) => a.done - b.done);
  listElem.innerHTML = '';
  renderTasks(tasks);
};

const renderTasks = (tasksList) => {
  const tasksElems = tasksList.map(({ text, done }, index) => {
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
  });
  listElem.innerHTML = '';
  renderTasks(tasks);
  taskInput.value = '';
};

createTaskBtn.addEventListener('click', addTask);

renderTasks(tasks);
