const express = require('express');
const app = express();

app.get('/api/data', (req, res) => res.send('Hello World from Harness!'));
app.listen(3000);