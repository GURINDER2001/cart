const Sequelize = require('sequelize')

const db = new Sequelize('userdb', 'user', 'shoppass', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: __dirname + '/userdb.db',
    pool: {
        min: 0,
        max: 5,
    }
})

const Users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})



db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    db,
    Users,
    Product
}