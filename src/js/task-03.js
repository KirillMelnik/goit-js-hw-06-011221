const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const imagesArray = [];

// images.forEach(({url, alt}) => {
//   const itemElem = document.createElement('li');
//   const imgElem = document.createElement('img');
//   imgElem.src = url;
//   imgElem.alt = alt;
//   imgElem.width = '400';
//   imgElem.height = '400'
//   imgElem.style.borderRadius = '50px';
//   imgElem.style.display = 'block'
//   itemElem.append(imgElem);
//   imagesArray.push(itemElem);
// })
// const elements = images.map(({url, alt}) => {
//   const itemElem = document.createElement('li');
//   const imgElem = document.createElement('img');
//   imgElem.src = url;
//   imgElem.alt = alt;
//   imgElem.width = '400';
//   imgElem.height = '400'
//   imgElem.style.borderRadius = '50px';
//   imgElem.style.display = 'block'
//   itemElem.appendChild(imgElem)
//   return itemElem;
// })

const makeMarkup = ({ url, alt }) => {
  return `
    <li>
      <img src="${url}" alt="${alt}" width='400' height='400'>
    </li>
  `
}

const makeImagesMarkup = images
  .map(makeMarkup)
  .join('');
  
  
  const listElem = document.querySelector('.gallery');
  listElem.style.display = 'flex';
  listElem.style.justifyContent = "space-around";
  listElem.style.listStyle = 'none';  
  listElem.insertAdjacentHTML('afterbegin', makeImagesMarkup)