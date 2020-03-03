const _db = require('./db')

const index = (req, res) => {
    let db = _db.getDb()
    
    let data = db[Math.floor(Math.random() * db.length)]

    res.render('index', {
        title: 'Prayukti | Get motivated!',
        quote: data.quote,
        source: data.source == "" ? "Unknown" : data.source
    })
}


module.exports = {
    index
}