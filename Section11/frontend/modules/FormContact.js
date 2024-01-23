import Form from './Form';
import validator from 'validator';

export default class FormContact extends Form {
    constructor(form_id) {
        super(form_id);
    }

    validate(e) {
        const el = e.target;

        this.validateFirstName(el);
        if (!this.validateContactInfo(el)) return;
        this.validateEmail(el);

        if (!this.errors) el.submit();
    }

    validateContactInfo(el) {
        const email = el.querySelector('#inputEmail');
        const phone = el.querySelector('#inputPhone');

        if (email.value.trim() === '' && phone.value.trim() === '') {
            this.errors = true;

            this.createErrorMessage(email.parentElement, 'Please enter at least one contact information (Email or Phone)');
            this.createErrorMessage(phone.parentElement, 'Please enter at least one contact information (Email or Phone)');

            return false;
        }

        return true;
    }

    validateEmail(el) {
        const email = el.querySelector('#inputEmail');

        if (email.value.trim() === '') return;

        if (!validator.isEmail(email.value)) {
            this.errors = true;
            this.createErrorMessage(email.parentElement, 'Please enter a valid email address.');
        };
    }

    validateFirstName(el) {
        const firstName = el.querySelector('#inputFirstName');

        if (firstName.value.trim() === '') {
            this.errors = true;
            this.createErrorMessage(firstName.parentElement, 'First Name can\'t be empty');
        }
    }
}
