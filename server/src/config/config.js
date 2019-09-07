const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'musicapp',
        user: process.env.DB_USER || 'musicapp',
        password: process.env.DB_PASS || 'musicapp',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../musicapp.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_Secret || 'secret'
    }
}