const router = require("express").Router();
const  Prenotazione = require("../controllers/prenotazione.controller.js");
module.exports = router => {
    

    router.get("/prenotazione/all", Prenotazione.findAll);

    router.post("/prenotazione/inserisci", Prenotazione.create);

    router.get("/prenotazione/auto", Prenotazione.findByAuto);

    router.get("/prenotazione/utente", Prenotazione.findByUtente);

    router.get("/prenotazione/:id", Prenotazione.findOne);

    router.put("/prenotazione/accetta/:id", Prenotazione.accetta);

    router.put("/prenotazione/rifiuta/:id", Prenotazione.rifiuta);

    router.delete("/prenotazione/elimina/:id", Prenotazione.delete);

}