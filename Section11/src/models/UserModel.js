const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const UserModel = mongoose.model('User', UserSchema);

class User {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async update(user_id) {
        if(!mongoose.Types.ObjectId.isValid(user_id)) return;

        this.user = await UserModel.findById(user_id);

        this.validateUpdate();
        if(this.errors.length > 0) return;

        if(this.body.email !== this.user.email) {
            await this.userExists();
            if(this.errors.length > 0) return;
            this.user.email = this.body.email;
        }
        
        if (this.body.password) {
            const salt = bcryptjs.genSaltSync();
            this.user.password = bcryptjs.hashSync(this.body.password, salt);
        }

        this.user = await UserModel.findByIdAndUpdate(user_id, { email: this.user.email, password: this.user.password }, { new: true });
    }

    async login() {
        await this.validateLogin();
        if(this.errors.length > 0) return;
    }

    async register() {
        this.validateRegister();
        if(this.errors.length > 0) return;

        await this.userExists();
        if(this.errors.length > 0) return;
        
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await UserModel.create({ email: this.body.email, password: this.body.password });
    }

    async userExists() {
        // User must be unique
        const user = await UserModel.findOne({ email: this.body.email });
        if(user) this.errors.push('This email address is already registered.');
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

    validateUpdate() {
        this.cleanUp();
        
        if(this.body.email === this.user.email && this.body.password.length === 0 && this.body.confirmPassword.length === 0) {
            this.errors.push('You dind\'t change any field');
            return;
        }

        if(this.body.email !== this.user.email) {
            // E-mail must be valid
            if(!validator.isEmail(this.body.email)) this.errors.push('Please enter a valid email address.');
        }

        if(this.body.password.length > 0 || this.body.confirmPassword.length > 0) {
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

    async validateLogin() {
        this.cleanUp();

        this.user = await UserModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push('Invalid credentials.');
            return;
        }
        
        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Invalid credentials.');
            this.user = null;
            return;
        }
    }
    
    validateRegister() {
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


    // Static Methods
    static async getUserById(user_id) {
        if(!mongoose.Types.ObjectId.isValid(user_id)) return;
        
        const user = await UserModel.findById(user_id);
        return user;
    }
}

module.exports = User;
