exports.homepage = (req, res) => {
    res.render('index', {
        title: 'This is my new Homepage Title',
        clients: [
            {
                fName: 'Cliente 01',
                email: 'client01@gmail.com',
            },
            {
                fName: 'Cliente 02',
                email: 'client02@gmail.com',
            }
        ] 
    });
    return;
}

exports.sendForm = (req, res) => {
    res.send(`New POST route message: ${req.body.inputName}`);

    return;
}
