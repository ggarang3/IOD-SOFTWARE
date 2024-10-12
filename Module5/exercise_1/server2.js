const express = require('express');
const app2 = express();

app2.get('/', (req, res) => {
    res.send('Hello from Server 2 on port 4000!');
});

app2.listen(4000, () => {
    console.log('Server 2 is running on port 4000');
});
