const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
    // res.send('<h1>Hello World!</h1>');
    res.send(`
    <form action="/" method="post">
        <label for="inputName" class="form-label">Name: </label>
        <input type="text" name="inputName" id="inputName" placeholder="Type your name" />
        <button>Submit</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Form successfully submited');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Welcome to Contact page</h1>');
});

app.listen(PORT, () => {
    console.log(`Access: http://localhost:${PORT}`);
    console.log('Server running at port', PORT);
});
