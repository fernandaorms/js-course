const Contact = require('../models/ContactModel');

exports.index = (req, res) => {
    res.render('contact');
}

exports.create = async function(req, res) {
    try {
        const contact = new Contact(req.body, req.session.user);

        await contact.create();
    
        if(contact.errors.length > 0) {
            req.flash('errors', contact.errors);
    
            req.session.save(() => res.redirect('/contact'));
            return;
        }
    
        req.flash('success', 'Contact successfully created.');
    
        req.session.save(() => res.redirect('/contact'));
        return;

    } catch(e) {
        console.log(e);
        return res.render('404')
    }
}
