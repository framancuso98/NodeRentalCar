
module.exports = (sequelize, type) => {
    const Categoria = sequelize.define("categoria", {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descrizione: {
            type: type.STRING
        }
    });

    return Categoria;
}