const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
        <label for="inputName" class="form-label">Name: </label>
        <input type="text" name="inputName" id="inputName" placeholder="Type your name" />
        <button>Submit</button>
    </form>
    `);
});

app.get('/test/:id_user?/:parameter?', (req, res) => {
    // profiles/3
    console.log(req.params);

    // profiles?key1=value1&key2=value2&key3=value3
    console.log(req.query);

    res.send(req.query);
});

app.post('/', (req, res) => {
    // data subimited in the form
    console.log(req.body);

    res.send(`Sended content: ${req.body.inputName}`);
});

app.listen(PORT, () => {
    console.log(`Access: http://localhost:${PORT}`);
    console.log('Server running at port', PORT);
});
