import validator from 'validator';

export default class Form {
    constructor(form_id) {
        this.form = document.querySelector(`#${form_id}`);
        this.errors = false;
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();

            this.clearErrors();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;

        this.validateEmail(el);

        this.validatePassword(el);

        if(!this.errors) el.submit();
    }

    validateEmail(el) {
        const email = el.querySelector('#inputEmail');

        if (!validator.isEmail(email.value)) {
            this.errors = true;
            this.createErrorMessage(email.parentElement, 'Please enter a valid email address.');
        };
    }

    validatePassword(el) {
        const password = el.querySelector('#inputPassword');

        const errorMessages = [];

        // Password
        // Must be between 8 and 50 characters
        if (password.value.length < 8 || password.value.length > 50) errorMessages.push('Password must be between 8 and 50 characters.');

        // Must contain at least 1 uppercase character
        if (!/[A-Z]/.test(password.value)) errorMessages.push('Password must contain at least 1 uppercase character.');

        // Must contain at least one number
        if (!/\d/.test(password.value)) errorMessages.push('Password must contain at least one number.');

        if (errorMessages.length > 0) {
            this.errors = true;
            errorMessages.forEach(errorMessage => {
                this.createErrorMessage(password.parentElement, errorMessage);
            });
        }

        this.validatePasswordConfirm(el, password);
    }

    validatePasswordConfirm(el, password) {
        const confirmPassword = el.querySelector('#inputConfirmPassword');

        // Password and ConfirmPassword have to be the same
        if (password.value !== confirmPassword.value) {
            this.errors = true;
            this.createErrorMessage(confirmPassword.parentElement, 'Your passwords do not match.');
        }
    }

    createErrorMessage(element, message) {
        let errorDiv = element.querySelector('div.error');
        if (!errorDiv) errorDiv = document.createElement('div');

        errorDiv.className = 'error';

        const errorSpan = document.createElement('span');
        errorSpan.className = 'error';
        errorSpan.textContent = message;

        errorDiv.appendChild(errorSpan);

        element.appendChild(errorDiv);
    }

    clearErrors() {
        this.errors = false;

        const errorDivs = this.form.querySelectorAll('div.error');

        errorDivs.forEach(errorDiv => {
            errorDiv.remove();
        });
    }
}
