const db = require('./db')

const index = (req, res) => {
    res.render('index', {
        title: 'Prayukti | Get motivated!',
    })
}


module.exports = {
    index
}