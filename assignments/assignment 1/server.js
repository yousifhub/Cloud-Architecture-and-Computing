const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const users = [];

// Main Page
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'This assignment was made by Yousif Khalid Elrefai',
        name: 'Yousif Khalid Elrefai',
        id: '422103',
        section: 'A4',
        course: 'CSC322 - Cloud Architecture and Computing',
        college: 'Faculty Artificial Intelligence',
        department: 'Artificial Intelligence',
        university: 'Delta University for Science and Technology'
    });
    return;
});

// Receive all users in system
app.get('/users', (req, res) => {
    if (users.length === 0) {
        res.status(404).send('No users found');
        return;
    } else {
        res.status(200).send(users);
        return;
    }
});

// Adds a new user to the system
app.post('/users', (req, res) => {
    const user = req.body;
    const findUser = users.find(x => x.name === user.name);
    if (findUser) {
        res.status(400).send('User already exists');
        return;
    } else {
        users.push(user);
        res.status(201).send(`User created:\n ${user.name}`);
        return;
    }
});

// Deletes a user from the system
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const findUser = users.findIndex(x => x.ID === id);
    if (findUser === -1) {
        res.status(400).send('User not found');
        return;
    } else {
        users.splice(findUser, 1);
        res.status(200).send('User deleted: ' + id);
        return;
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});