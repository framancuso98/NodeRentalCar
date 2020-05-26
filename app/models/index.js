const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.utente = require("./utente.model")(sequelize, Sequelize);
db.ruolo = require("./ruolo.model")(sequelize, Sequelize);
db.auto = require("./auto.model")(sequelize, Sequelize);
db.prenotazione = require("./prenotazione.model")(sequelize, Sequelize);
db.categoria = require("./categoria.model")(sequelize, Sequelize);


db.ruolo.hasOne(db.utente);
db.utente.belongsTo(db.ruolo);

db.categoria.hasOne(db.auto);
db.auto.belongsTo(db.categoria);

db.utente.hasOne(db.prenotazione);
db.auto.hasOne(db.prenotazione);
db.prenotazione.belongsTo(db.auto);
db.prenotazione.belongsTo(db.utente);


module.exports = db;

