const db = require("../models");
const Prenotazione = db.prenotazione;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    console.log("ciao")
    Prenotazione.findAll().then(
        data => {
            res.send(data)
        })
        .catch( err => {
            res.status(500).send({
                message:
                    err.message || "Errore nella creazione della lista prenotazioni"
            });
        });
};

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Utente nullo!"
        });
        return;
    }

    const prenotazione = {
        stato: "IN SOSPESO",
        utenteId: req.body.utenteId,
        autoId: req.body.autoId,
    }

    Prenotazione.create(prenotazione)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Errore improvviso nella creazione prenotazione"
            });
        });
};

exports.findByUtente = (req, res) => {
    const utenteId = req.body.utenteId;
    var condition = utenteId ? { utenteId: { [Op.like]: `%${utenteId}` } } : null;

    Prenotazione.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Errore nella ricerca dell'prenotazione tramite id utente!" + utenteId
            });
        });
};

exports.findByAuto = (req, res) => {
    const autoId = req.body.autoId;
    var condition = autoId ? { autoId: { [Op.like]: `%${autoId}` } } : null;

    Prenotazione.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Errore nella ricerca dell'prenotazione tramite id auto!" + autoId
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Prenotazione.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Errore nella ricerca della prenotazione tramite id "+ id
            });
        });
};


exports.accetta = (req, res) => {
    const id = req.params.id;

    const prenotazione = {
        stato: "ACCETTATA",
    }

    Prenotazione.update(prenotazione, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Prenotazione accettata!"
                });
            } else {
                res.send({
                    message: `Impossibile accettare la prenotazione con id=${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Errore nell'accettazione della prenotazione con id="+id
            });
        });
};



exports.rifiuta = (req, res) => {
    const id = req.params.id;

    const prenotazione = {
        stato: "RIFIUTATA",
    }

    Prenotazione.update(prenotazione, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Prenotazione rifiutata!"
                });
            } else {
                res.send({
                    message: `Impossibile rifiutare la prenotazione con id=${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Errore nell'accettazione della prenotazione con id="+id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Prenotazione.destroy({
        where: { id:id }
    })
        .then(num => {
            if ( num == 1){
                res.send({
                    message: "Prenotazione eliminato con successo!"
                });
            } else {
                res.send({
                    message: `Impossibile eliminare la prenotazione con id=${id}`
                })
            }
        })
        .catch( err => {
            res.status(500).send({
                message: "Errore durante l'eliminazione della prenotazione!"
            });
        });
};
