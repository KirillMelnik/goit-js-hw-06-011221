const refs = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'),
}

function onClickInput() {
    refs.nameEl.textContent = refs.inputEl.value;
    if (refs.inputEl.value === '') {
        refs.nameEl.textContent = 'Anonymous';
    }
}

refs.inputEl.addEventListener('input', onClickInput);

