import "./styles.css";

const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

const postalCode = document.getElementById('postal-code');
const postalCodeError = document.querySelector('#postal-code + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password + span.error');

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

postalCode.addEventListener('input', (event) => {
    if (postalCode.validity.valid) {
        postalCodeError.textContent = '';
        postalCodeError.className = 'error';
    } else {
        showPostalCodeError();
    }
});

password.addEventListener('input', (event) => {
    if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error';
    } else {
        showPasswordError();
    }
});

confirmPassword.addEventListener('input', (event) => {
    const checkPassword = password.value;
    const checkConfirmPassword = confirmPassword.value;
    
    if (checkPassword !== checkConfirmPassword && checkConfirmPassword !== '') {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.className = 'error active';
    } else if (!confirmPassword.validity.valid) {
        showConfirmPasswordError();
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordError.className = 'error';
    }
});



form.addEventListener('submit', (event) => {
    let isValid = true;

    if (!email.validity.valid) {
        showEmailError();
        isValid = false;
    }

    if (!country.validity.valid) {
        showCountryError();
        isValid = false;
    }

    if (!postalCode.validity.valid) {
        showPostalCodeError();
        isValid = false;
    }

    if (!password.validity.valid) {
        showPasswordError();
        isValid = false;
    }

    if (!confirmPassword.validity.valid) {
        showConfirmPasswordError();
        isValid = false;
    }

    const checkPassword = password.value;
    const checkConfirmPassword = confirmPassword.value;
    if (checkPassword !== checkConfirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.className = 'error active';
        isValid = false;
    }

    if (!isValid) {
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
    } else if (country.validity.tooShort) {
        countryError.textContent = 'Please enter at least 3 characters.';
    }

    countryError.className = 'error active';

}

function showPostalCodeError() {
    if (postalCode.validity.valueMissing) {
        postalCodeError.textContent = 'You need to enter a postal code.';
    } else if (postalCode.validity.tooShort) {
        postalCodeError.textContent = 'Please enter at least 5 characters.';
    } else if (postalCode.validity.tooLong) {
        postalCodeError.textContent = 'Please enter no more than 5 characters';
    }

    postalCodeError.className = 'error active';

}

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'You need to enter a password.';
    } else if (password.validity.tooShort) {
        passwordError.textContent = 'Please enter at least 8 characters';
    }

    passwordError.className = 'error active';

}

function showConfirmPasswordError() {
    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = 'You need to confirm the password.';
    } else if (confirmPassword.validity.tooShort) {
        confirmPasswordError.textContent = 'Please enter at least 8 characters';
    }

    confirmPasswordError.className = 'error active';

}