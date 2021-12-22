const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createMarkup = [];
  
ingredients.map(item => {
  const itemElem = document.createElement('li');
  itemElem.textContent = item;
  itemElem.classList.add('item');
  createMarkup.push(itemElem);
})

const listElem = document.querySelector('#ingredients');
listElem.append(...createMarkup);