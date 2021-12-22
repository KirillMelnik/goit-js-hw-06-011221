const input = document.querySelector('[data-length="6"]');

const onValidInput = () => {
    if (input.value.length <= input.dataset.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    
    if (input.value.length > input.dataset.length)  {
            input.classList.add('invalid');
    }
}
    
input.addEventListener('blur', onValidInput);