const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const RegisterSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const RegisterModel = mongoose.model('Register', RegisterSchema);

class Register {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    cleanUp() {
        for(const key in this.body) {
           if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
           }
        }

        this.body = {
            email: this.body.inputEmail,
            password: this.body.inputPassword,
            confirmPassword: this.body.inputConfirmPassword
        }
    }

    async register() {
        this.validate();
        if(this.errors.length > 0) return;

        await this.userExists();
        if(this.errors.length > 0) return;
        
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await RegisterModel.create({ email: this.body.email, password: this.body.password });
    }

    async userExists() {
        // User must be unique
        const user = await RegisterModel.findOne({ email: this.body.email });
        if(user) this.errors.push('This email address is already registered.');
    }

    validate() {
        this.cleanUp();

        // E-mail must be valid
        if(!validator.isEmail(this.body.email)) this.errors.push('Please enter a valid email address.');
        
        // Password
        // Must be between 8 and 50 characters
        if (this.body.password.length < 8 || this.body.password.length > 50) this.errors.push('Password must be between 8 and 50 characters.');
        // Must contain at least 1 uppercase character
        if (!/[A-Z]/.test(this.body.password)) this.errors.push('Password must contain at least 1 uppercase character.');
        // Must contain at least one number
        if (!/\d/.test(this.body.password)) this.errors.push('Password must contain at least one number.');
        // And ConfirmPassword have to be the same
        if (this.body.password !== this.body.confirmPassword) this.errors.push('Your passwords do not match.');
    }

}

module.exports = Register;
