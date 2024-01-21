const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    created_date: { type: Date, default: Date.now }, 
    updated_date: { type: Date, required: false, default: null }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
    constructor(body, user) {
        this.body = body;
        this.errors = [];
        this.user = user;
        this.contact = null;
    }

    async create() {
        this.validate();
        if(this.errors.length > 0) return;

        this.contact = await ContactModel.create(this.body);
    }

    cleanUp() {
        for(const key in this.body) {
           if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
           }
        }

        this.body = {
            first_name: this.body.inputFirstName,
            last_name: this.body.inputLastName,
            email: this.body.inputEmail,
            phone: this.body.inputPhone,
            user: this.user._id
        }
    }

    validate() {
        this.cleanUp();

        // The field First Name can't be empty
        if(!this.body.first_name) this.errors.push('First Name is required.');

        // E-mail must be valid
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Please enter a valid email address.');

        // User must fill at least one contact option
        if(!this.body.email && !this.body.phone ) this.errors.push('Please enter at least one contact information (Email or Phone).');
    }
}

module.exports = Contact;