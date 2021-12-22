const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecrement);
refs.incrementBtn.addEventListener('click', onincrement);



function onDecrement() {
    counterValue -= 1;
    return refs.value.textContent = counterValue;    
};
addEventListener
function onincrement() {
    counterValue += 1;
    return refs.value.textContent = counterValue;
}