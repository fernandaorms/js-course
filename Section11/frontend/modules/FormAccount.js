import Form from './Form';

export default class FormAccount extends Form {
    constructor(form_id) {
        super(form_id);
    }

    validatePassword(el) {
        const password = el.querySelector('#inputPassword');

        if (password.value.trim() === '') return;

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
}
