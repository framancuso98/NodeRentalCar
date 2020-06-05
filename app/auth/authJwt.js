const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Utente = db.utente;


verifyToken = (req, res, next) => {
    let  jwtToken = req.headers["authorization"];
    let token = jwtToken.substring(7);
    console.log(token);
    if (!token) {
        return res.status(403).send({
            message: "Nessun token presente!!"
        });
    }

    jwt.verify(token, config.secret,(err, decode) => {
        if (err) {
            return res.send(401).send({
                message: "Non autorizzato"
            });
        }
        req.utenteId = decode.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    Utente.findByPk(req.utenteId).then(utente => {
        if (utente.ruoloId === 1){
            console.log(utente.ruoloId)
            next();
            return;
        }
        res.status(403).send({
            message: "Impossibile accedere!! Accesso consentito solo ad Admin!"
        });
        return;
    });
};

isUser = (req, res, next) => {
    Utente.findByPk(req.utenteId).then(utente => {
        if (utente.ruoloId === 2){
            console.log(utente.ruoloId)
            next();
            return;
        }
        res.status(403).send({
            message: "Impossibile accedere!! Accesso consentito solo ad User!"
        });
        return;
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isUser: isUser,
}

module.exports = authJwt;