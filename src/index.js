import "./styles.css";

const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showEmailError();
    }
});

country.addEventListener('input', (event) => {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showCountryError();
    }
});


form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an email address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address.';
    }

    emailError.className = 'error active';

}

function showCountryError() {
    if (country.validity.valueMissing) {
        countryError.textContent = 'You need to enter a country.';
    }

    countryError.className = 'error active';

}