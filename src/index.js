import "./styles.css";

const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError();
    }
});


form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an email address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address.';
    }

    emailError.className = 'error active';

}