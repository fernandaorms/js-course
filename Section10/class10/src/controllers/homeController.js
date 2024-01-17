exports.homepage = (req, res) => {
    res.render('index');
}

exports.sendForm = (req, res) => {
    console.log(req.body);

    res.send(`New POST route message: ${req.body.inputName}`);
}