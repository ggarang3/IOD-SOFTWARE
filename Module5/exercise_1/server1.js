const express = require('express');
const app1 = express();

app1.get('/', (req, res) => {
    res.send('Hello from Server 1 on port 3000!');
});

app1.listen(3000, () => {
    console.log('Server 1 is running on port 3000');
});
