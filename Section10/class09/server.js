const express = require('express');
const app = express();
const PORT = 3002;
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Access: http://localhost:${PORT}`);
    console.log('Server running at port', PORT);
});
