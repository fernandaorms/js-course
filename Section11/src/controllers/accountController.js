const User = require('../models/UserModel');

exports.index = async function (req, res) {
    if(!req.session.user) return res.render('404');

    const user = await User.getUserById(req.session.user._id);
    if(!user) return res.render('404');

    res.render('account', { user });
}

exports.update = async function(req, res) {
    if(!req.session.user) return res.render('404');

    try {
        const user = new User(req.body);

        await user.update(req.session.user._id);

        if(user.errors.length > 0) {
            req.flash('errors', user.errors);
    
            req.session.save(() => res.redirect('/account'));
            return;
        }

        req.flash('success', 'Account successfully updated.');
    
        req.session.save(() => res.redirect('/account'));
        return;

    } catch(e) {
        console.log(e);
        return res.render('404');
    }
}
