const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is a devops-project page!! for CI/CD pipeline');
});

app.listen(3000,() => console.log('server is running on port 3000'));