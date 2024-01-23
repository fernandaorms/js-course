import Form from './Form';

export default class FormLogin extends Form {
    constructor(form_id) {
        super(form_id);
    }

    validatePassword(el) {
        const password = el.querySelector('#inputPassword');

        if (password.value.trim() === '') {
            this.errors = true;
            this.createErrorMessage(password.parentElement, 'Password can\'t be empty');
        }
    }
}
