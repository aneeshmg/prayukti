const server = require('./src/server')
const config = require('./src/config')

server.listen(process.env.PORT || config.port, () => { console.log(`Application running on ${process.env.PORT || config.port}`)})