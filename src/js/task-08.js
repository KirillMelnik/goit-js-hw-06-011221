
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget)

    if (
        event.currentTarget.elements.email.value === '' ||
        event.currentTarget.elements.password.value === ''
    ) {
        alert('All form fields must be filled out!');
    }

    else {
        const formData = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        }
        console.log(formData);
        event.currentTarget.reset();
    }
}
