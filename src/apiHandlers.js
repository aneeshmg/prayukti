const db = require('./db')
const apiModel = require('./apiModel')

const index = (req, res) => {
    let response = new apiModel('Prayukti - Get motivated!')
    res.send(response)
}

const getLine = (req, res) => {
    let response = new apiModel("Awesomeness")
    res.send(response)
}


module.exports = {
    index,
    getLine
}