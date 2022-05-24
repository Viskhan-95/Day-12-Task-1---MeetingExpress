const express = require("express");
const app = express();
const port = 3000;

app.get('/', (reg, res) => {
    res.send("Hello world");
})

app.get('/users', (reg, res) => {
    res.send(["user1", "user2", "user3"]);
})

app.post('/users', (reg, res) => {
    res.send("юзер добавлен");
})

app.delete('/users/:id', (reg, res) => {
    res.send(`юзер с ID ${reg.params.id} удален`);
})

app.patch('/users/:id', (reg, res) => {
    res.send(`юзер с ID ${reg.params.id} изменен`);
})

app.patch('/admin', (reg, res) => {
    res.send("не хватает прав доступа");
})


app.listen(port, () => {
    console.log(`Соединение прошла успешно http://localhost:${port}`)
})