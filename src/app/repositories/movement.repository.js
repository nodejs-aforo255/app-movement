const MongoClient = require('mongodb').MongoClient
const config = require('../config/environments')

const movementRepository = {
    getMovementByAccountId: async (accountId) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(config.DB_URI, function (err, db) {
                if (err) throw err
                const query = { accountid: accountId }
                db.db(config.DB_NAME).collection("movement").find(query).toArray(function (err, result) {
                    if (err) throw err
                    db.close()
                    resolve(result)
                })
            })
        })
    }
}

module.exports = movementRepository;