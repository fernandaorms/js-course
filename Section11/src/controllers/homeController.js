exports.homepage = (req, res) => {
    res.render('index', {
        title: 'This is my new Homepage Title'
    });
    return;
}

exports.sendForm = (req, res) => {
    res.send(`New POST route message: ${req.body.inputName}`);

    return;
}
