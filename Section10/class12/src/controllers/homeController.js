exports.homepage = (req, res) => {
    res.render('index');
    return;
}

exports.sendForm = (req, res) => {
    res.send(`New POST route message: ${req.body.inputName}`);

    return;
}
