const User = require('../models/UserModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('logged');

    return res.render('login');
}

exports.logout = (req, res) => {
    req.session.destroy();
    
    return res.redirect('/login');
}

exports.login = async function(req, res) {
    try {
        const user = new User(req.body);

        await user.login();

        if(user.errors.length > 0) {
            req.flash('errors', user.errors);

            req.session.save(function() {
                return res.redirect('/login');
            });
            return;
        }

        req.flash('success', 'Login Successful. Welcome to your contact\'s Agenda!');

        req.session.user = user.user;
        req.session.save(function() {
            return res.redirect('/');
        });
        return;

    } catch(e) {
        console.log(e);
        res.render('404');
    }
}
