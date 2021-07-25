const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const addListElement = (listItems) => {
  const list = document.querySelector('.list');
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const element = document.createElement('li');
      element.classList.add('list__item');
      if (done) {
        element.classList.add('list__item_done');
      }
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      element.append(checkbox, text);

      return element;
    });
  list.append(...listItemsElems);
};

addListElement(tasks);
