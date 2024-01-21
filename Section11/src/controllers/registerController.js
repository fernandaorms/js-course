const Register = require('../models/RegisterModel');
const { login } = require('./loginController');

exports.index = (req, res) => {
    res.render('register');
}

exports.register = async function(req, res) {
    try {
        const register = new Register(req.body);

        await register.register();
    
        if(register.errors.length > 0) {
            req.flash('errors', register.errors);
    
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
