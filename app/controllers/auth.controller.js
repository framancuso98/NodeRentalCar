const db = require("../models");
const config = require("../config/auth.config");
const Utente = db.utente;
//const Ruolo = db.ruolo;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

    if(!req.body.username) {
        res.status(400).send({
            message: "Utente nullo!"
        });
        return;
    }

    const utente = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
        nome: req.body.nome,
        cognome: req.body.cognome,
        data_nascita: req.body.data_nascita,
        ruoloId: req.body.ruoloId,
    }

    Utente.create(utente)
        .then(utente => {
            res.send({
                message: "registrazione avvenuta con successo!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Errore nella registazione!"
            });
        });
}

exports.signIn = (req, res) => {
    Utente.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(utente => {
            if (!utente) {
                return res.status(404).send({
                    message: "utente non trovato"
                });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                utente.password,
            );

            if (!passwordIsValid) {
                return  res.status(401).send({
                    accessToken: null,
                    message: "Password non valida",
                });
            }

            let token = jwt.sign({id: utente.id}, config.secret,{
                expiresIn: 86400
            });

            res.status(200).send({
                id: utente.id,
                username: utente.username,
                ruoloId: utente.ruoloId,
                token: token,
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};