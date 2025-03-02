const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const users = []

app.get('/users', (req, res) => {
    if(users.length === 0) {
        res.status(404).send('No users found');
        return;
    }else {
        res.status(200).send(users);
        return;
    }
});

app.post('/users', (req, res) => {
    const user = req.body;
    const findUser = users.find(x => x.name === user.name);
    if(findUser) {
        res.status(400).send('User already exists');
        return;
    } else {
        res.status(201).send(`user created:\n` + user.name);
    }
});

app.delete('/users/:id', (req, res) => { // continue later
    if(users.length === 0) {
        res.status(404).send('No users found');
        return;
    } else {
        users.length = 0;
        res.status(200).send('All users deleted');
        return;
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});