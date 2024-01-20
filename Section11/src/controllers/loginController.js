exports.index = (req, res) => {
    res.render('login');
    return;
}

exports.login = (req, res) => {
    res.send('<h1>Login Route Success</h1>');
    console.log(req.body);
    return;
}
