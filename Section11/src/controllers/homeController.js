exports.index = (req, res) => {
    if(req.session.user) return res.render('index-logged');

    return res.render('index');
}
