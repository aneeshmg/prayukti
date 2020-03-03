const fs = require("fs")
const path = require('path')

let _db

const connectToDatabase = () => {
    return new Promise((res, rej) => {
        _db = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')))
        console.log(_db.length)
        res()
    })
}

const getDb = () => {
    if (_db) {
        return _db
    }
    console.log("Database not found or something went wrong with db.")
}

module.exports = {
    connectToDatabase,
    getDb
}