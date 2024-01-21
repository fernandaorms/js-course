const Contact = require('../models/ContactModel');

exports.index = (req, res) => {
    res.render('contact', { contact: {} });
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
    
        req.session.save(() => res.redirect(`/contact/${contact.contact._id}`));
        return;

    } catch(e) {
        console.log(e);
        return res.render('404')
    }
}

exports.updateIndex = async function(req, res) {
    if(!req.params.id) return res.render('404');

    const contact = await Contact.getContactById(req.params.id);
    if(!contact) return res.render('404');

    res.render('contact', { contact });
}

exports.update = async function(req, res) {
    if(!req.params.id) return res.render('404');

    try {
        const contact = new Contact(req.body, req.session.user);

        await contact.update(req.params.id);
    
        if(contact.errors.length > 0) {
            req.flash('errors', contact.errors);
    
            req.session.save(() => res.redirect(`/contact/${req.params.id}`));
            return;
        }
    
        req.flash('success', 'Contact successfully updated.');
    
        req.session.save(() => res.redirect(`/contact/${contact.contact._id}`));
        return;

    } catch(e) {
        console.log(e);
        return res.render('404')
    }
}

exports.delete = async function(req, res) {
    if(!req.params.id) return res.render('404');

    const contact = await Contact.delete(req.params.id);
    if(!contact) return res.render('404');

    req.flash('success', 'Contact successfully deleted.');
    
    req.session.save(() => res.redirect('/'));
    return;
}
