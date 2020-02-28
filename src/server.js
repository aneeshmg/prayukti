const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const config = require('./config')
const siteRoutes = require('./siteRoutes')
const apiRoutes = require('./apiRoutes')
const db = require('./db')

const app = express()


app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/js', express.static(path.join(__dirname, './views/js')))
app.use('/favicons', express.static(path.join(__dirname, './views/favicons')))

// Always wear helmet
app.use(helmet())
app.use(cors())

app.use('/', siteRoutes)
app.use('/api', apiRoutes)

module.exports = app