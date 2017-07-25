const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    if (req.body.authData.username === 'broCode' && req.body.authData.password === 'broCode123') {
        res.json({
            username: 'broCode',
            clientData: {
                themeColor: 'green'
            },
            ServerData: {
                role: 'admin'
            }
        })
    } else {
        res.status(403).send('Invalid Credentials')
    }
});

app.listen(3000);