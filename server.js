require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
const { getSummary } = require('./utils')

const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Setup DB Connection
var conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

conn.connect()

// API calls
app.get('/api/stats/:variable', async (req, res) => {
    const variable = req.params.variable
    data = await getSummary(variable, conn)
    res.send(data)
})

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')))
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, () => console.log(`Listening on port ${port}`))

process.on('exit', function() {
    conn.end()
})
