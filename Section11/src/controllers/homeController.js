const Contact = require('../models/ContactModel');

exports.index = async function(req, res) {
    if(req.session.user) {
        try {
            const contacts = await Contact.getContactsByUserId(req.session.user._id);

            return res.render('index-logged', { contacts });
        } catch(e) {
            console.log(e);
            return res.render('404');
        }
    }

    return res.render('index');
}
