const fs = require('fs')
const path = require('path')

const index = (req, res) => {
    res.render('index', {
        title: 'Welcome to Prayukti',
    })
}


module.exports = {
    index
}