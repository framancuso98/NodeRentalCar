
module.exports = (sequelize, type) => {
    const Ruolo = sequelize.define("ruolo", {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ruolo: {
            type: type.STRING
        }
    });

    return Ruolo;
}