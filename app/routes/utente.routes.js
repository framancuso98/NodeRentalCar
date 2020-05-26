const router = require("express").Router();
const  Utente = require("../controllers/utente.controller.js");
module.exports = router => {





    router.get("/utente/all",Utente.findAll);

    router.post("/utente/inserisci", Utente.create);

    router.get("/utente/username", Utente.findByUsername);

    router.get("/utente/:id", Utente.findOne);

    router.put("/utente/update/:id", Utente.update);

    router.delete("/utente/elimina/:id", Utente.delete);


}