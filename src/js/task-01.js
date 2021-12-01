const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});