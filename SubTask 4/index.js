const express = require('express')
const app = express()
const port = 3000

let arr = ['user1', 'user2', 'user3'];

app.get('/', (reg, res) => {
    res.send("Hello world")
})

app.get('/users', (reg, res) => {
    res.send(arr)
})

app.post('/users', (reg, res) => {
    res.send("юзер добавлен")
})

app.delete('/admin', (reg, res) => {
    res.send("не хватает прав доступа")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})