const express = require('express')
const app = express()
const port = 8000

app.get('/api/v1', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
