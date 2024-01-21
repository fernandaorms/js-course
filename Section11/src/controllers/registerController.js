const User = require('../models/UserModel');

exports.index = (req, res) => {
    if(req.session.user) return res.redirect('/login');

    return res.render('register');
}

exports.register = async function(req, res) {
    try {
        const user = new User(req.body);

        await user.register();
    
        if(user.errors.length > 0) {
            req.flash('errors', user.errors);
    
            req.session.save(function() {
                return res.redirect('/register');
            });
            return;
        }
    
        req.flash('success', 'Registration Successful. Login to access your Agenda!');
    
        req.session.save(function() {
            return res.redirect('/register');
        });
        return;

    } catch(e) {
        console.log(e);
        res.render('404');
    }
}
