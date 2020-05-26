
module.exports = (sequelize, type) => {
    const Auto = sequelize.define("auto", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        costruttore: {
            type: type.STRING
        },
        modello: {
            type: type.STRING
        },
        targa: {
            type: type.STRING
        },
        anno: {
            type: type.DATE
        }
    });
    
    return Auto;
}
