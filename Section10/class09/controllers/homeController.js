exports.homepage = (req, res) => {
    res.send(`
    <form action="/" method="post">
        <label for="inputName" class="form-label">Name: </label>
        <input type="text" name="inputName" id="inputName" placeholder="Type your name" />
        <button>Submit</button>
    </form>
    `);
}

exports.sendForm = (req, res) => {
    console.log(req.body);

    res.send(`New POST route message: ${req.body.inputName}`);
}