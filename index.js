const app = require('express')();

const PORT = 3000

app.listen(PORT, () => console.log('Server running'));

app.get('/skills', (req, res) => {
    res.send({
        javascript: 10,
        node: 10
    });
})