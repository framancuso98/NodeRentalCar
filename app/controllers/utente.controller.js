
const db = require("../models");
const Utente = db.utente;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Utente.findAll().then(
        data => {
            res.send(data)
        })
        .catch( err => {
            res.status(500).send({
                message:
                    err.message || "Errore nella creazione della lista utente"
            });
        });
};

exports.create = (req, res) => {
    if(!req.body.username) {
        res.status(400).send({
            message: "Utente nullo!"
        });
        return;
    }

    const utente = {
        username: req.body.username,
        password: req.body.password,
        nome: req.body.nome,
        cognome: req.body.cognome,
        data_nascita: req.body.data_nascita,
        ruoloId: req.body.ruoloId,
    }

    Utente.create(utente)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Errore improvviso nella creazione dell'utente"
            });
        });
};

exports.findByUsername = (req, res) => {
    const username = req.body.username;
    var condition = username ? { username: { [Op.like]: `%${username}` } } : null;

    Utente.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Errore nella ricerca dell'utente tramite username!" + username
            });
        });
 };

 exports.findOne = (req, res) => {
   // const id = req.params.id;

    Utente.findByPk(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Errore nella ricerca dell utente tramite id "+ id
            });
        });
 };


 exports.update = (req, res) => {
     const id = req.params.id;

     Utente.update(req.body, {
         where: {id: id}
     })
         .then(num => {
             if (num == 1){
                 res.send({
                     message: "Utente modificato con successo!"
                 });
             } else {
                 res.send({
                     message: `Impossibile modificare l'utente con id=${id}`
                 })
             }
         })
         .catch(err => {
             res.status(500).send({
                 message: "Errore nella modifice dell'utente con id="+id
             });
         });
 };

 exports.delete = (req, res) => {
     const id = req.params.id;

     Utente.destroy({
         where: { id: id }
     })
         .then(num => {
             if ( num === 1){
                 res.send({
                     message: "Utente eliminato con successo!"
                 });
             } else {
                 console.log(num)
                 res.send({
                     message: `Impossibile eliminare l'utente con id=${id}`
                 })
             }
        })
         .catch( err => {
             res.status(500).send({
                 message: "Errore durante l'eliminazione dell'utente!"
             });
         });
 };


