const _db = require('./db')
const apiModel = require('./apiModel')

const index = (req, res) => {
    const response = 'Prayukti - Get motivated!'
    res.send(response)
}

const getLine = (req, res) => {
    let db = _db.getDb()
    
    res.send(new apiModel(db[Math.floor(Math.random() * db.length)]))
}


module.exports = {
    index,
    getLine
}