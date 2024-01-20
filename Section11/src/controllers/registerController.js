exports.index = (req, res) => {
    res.render('register');
    return;
}

exports.register = (req, res) => {
    res.send('<h1>Register Route Success</h1>');
    console.log(req.body);
    return;
}
