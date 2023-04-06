class ValidateForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.fieldsValidate();
        const validPasswords = this.passwordsValidate();
        
        alert('Form sent!');
        // this.form.submit();  // Submit Form
    }

    passwordsValidate() {
        let valid = true;

        const password = document.querySelector('#password');
        const confirmPassword = document.querySelector('#confirmPassword');

        if((password.value.length < 3) || (password.value.length > 12)) {
            this.createError(password, `Password must be between 6 and 12 characters`);
            valid = false;
        }

        if(password.value !== confirmPassword.value) {
            this.createError(confirmPassword, `Password and Confirm Password don't match`);
            valid = false;
        }

        return valid;
    }

    fieldsValidate() {
        let valid = true;

        for (const errorText of this.form.querySelectorAll('.error')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.validate')) {
            if(!field.value) {
                this.createError(field, `Field "${field.previousElementSibling.innerText}" can't be empty`);
                valid = false;
            }
            
            if(field.id === 'cpf') {
                if(!this.validateCpf(field)) valid = false;
            }

            if(field.id === 'user') {
               if(!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }

    validateUser(field) {
        const username = field.value;

        let valid = true;

        if(!username.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Username can only contain letters and/or numbers');
            valid = false;
        }

        if((username.length < 3) || (username.length > 12)) {
            this.createError(field, `Username must be between 3 and 12 characters`);
            valid = false;
        }

        return valid;
    }
    
    validateCpf(field) {
        const cpf = new ValidateCpf(field.value);

        if(!cpf.validate()) {
            this.createError(field, `This CPF is not valid`);
            return false;
        }

        return true;
    }

    createError(field, message) {
        const div = document.createElement('div');
        div.classList.add('error');
        div.textContent = message;

        // field.parentElement.appendChild(div);  // Another way to insert element at parent
        field.insertAdjacentElement('afterend', div);
    }
}

const formValidate = new ValidateForm();