const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    updated_date: { type: Date, default: null },
    created_date: { type: Date, default: Date.now },
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

    async update(contact_id) {
        if(!mongoose.Types.ObjectId.isValid(contact_id)) return;

        this.validate();
        if(this.errors.length > 0) return;

        this.body.updated_date = Date.now();

        this.contact = await ContactModel.findByIdAndUpdate(contact_id, this.body, { new: true });
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

    // Static Methods
    static async getContactById(contact_id) {
        if(!mongoose.Types.ObjectId.isValid(contact_id)) return;
        
        const contact = await ContactModel.findById(contact_id);
        return contact;
    }

    static async getContactsByUserId(user_id) {
        if(!mongoose.Types.ObjectId.isValid(user_id)) return;

        const contacts = await ContactModel.find({ user: user_id });
        return contacts;
    }

    static async delete(contact_id) {
        if(!mongoose.Types.ObjectId.isValid(contact_id)) return;
        
        const contact = await ContactModel.findByIdAndDelete(contact_id);
        return contact;
    }
}

module.exports = Contact;
