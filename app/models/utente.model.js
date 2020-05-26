
module.exports = (sequelize, type) => {
    const Utente = sequelize.define("utente", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING
        },
        password: {
            type: type.STRING
        },
        nome: {
            type: type.STRING
        },
        cognome: {
            type: type.STRING
        },
        data_nascita: {
            type: type.DATE
        }
    });

    return Utente;
}
