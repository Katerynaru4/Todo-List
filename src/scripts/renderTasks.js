import { getTasksList } from './tasksGateway';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.creationDate) - new Date(a.creationDate);
};

const createCheckbox = ({ id, done }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.taskId = id;
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
};

const createTextElem = (text) => {
  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  return textElem;
};

const createDeleteBtn = (id) => {
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.dataset.taskId = id;
  return deleteBtnElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  if (done) {
    listItemElem.classList.add('list-item_done');
  }
  const checkboxElem = createCheckbox({ id, done });
  const textElem = createTextElem(text);
  const deleteBtnElem = createDeleteBtn(id);

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export default function renderTasks() {
  getTasksList().then((dataTasks) => {
    listElem.innerHTML = '';
    const tasksElems = dataTasks.sort(compareTasks).map(createListItem);
    listElem.append(...tasksElems);
  });
}
