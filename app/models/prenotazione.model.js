
module.exports = (sequelize, type) => {
    const Prenotazione = sequelize.define("prenotazione", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stato: {
            type: type.STRING
        }
    });

    return Prenotazione;
}
