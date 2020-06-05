const db = require("../models");
const Ruolo = require("../models/ruolo.model");
const Utente = db.utente;

checkDuplicateUsername = (req, res, next) => {

    Utente.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username non è disponibile!!"
            });
            return;
        }
        next();
    });
}

checkRolesExisted = (req, res, next) => {
    if( req.body.ruoloId !== 1 && req.body.ruoloId !== 2){
        res.status(400).send({
            message: "Ruolo inesistente! "
        });
        return;
    }
    next();
}

const verifySignUp = {
    checkDuplicateUsername: checkDuplicateUsername,
    checkRolesExisted: checkRolesExisted,
}

module.exports = verifySignUp;

