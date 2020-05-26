const db = require("../models");
const Auto = db.auto;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Auto.findAll().then(
        data => {
            res.send(data)
        })
        .catch( err => {
            res.status(500).send({
                message:
                    err.message || "Errore nella creazione della lista auto"
            });
        });
};

exports.create = (req, res) => {

    if (!req.body){
        res.status(400).send({
            message: "Il Body della request è vuoto!"
        });
        return;
    }

    const auto = {
        costruttore: req.body.costruttore,
        modello: req.body.modello,
        targa: req.body.targa,
        anno: req.body.anno,
    }

    Auto.create(auto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Errore improvviso nella creazione dell'auto"
            });
        });
};

exports.findByTarga = (req, res) => {
    const targa = req.body.targa;
    var condition = targa ? { targa: { [Op.like]: `%${targa}` } } : null;

    Auto.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Errore nella ricerca dell'auto tramite targa!" + targa
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Auto.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Errore nella ricerca dell'auto tramite id "+ id
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;

    Auto.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Auto modificato con successo!"
                });
            } else {
                res.send({
                    message: `Impossibile modificare l'auto con id=${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Errore nella modifice dell'auto con id="+id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Auto.destroy({
        where: { id:id }
    })
        .then(num => {
            if ( num == 1){
                res.send({
                    message: "Auto eliminata con successo!"
                });
            } else {
                res.send({
                    message: `Impossibile eliminare l'auto con id=${id}`
                })
            }
        })
        .catch( err => {
            res.status(500).send({
                message: "Errore durante l'eliminazione dell'auto!"
            });
        });
};




