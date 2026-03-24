const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is a devops_project for testing CI/CD pipeline');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});