const router = require("express").Router();
const  Auto = require("../controllers/auto.controller.js");

module.exports = router => {


    router.get("/auto/all", Auto.findAll)

    router.post("/auto/inserisci", Auto.create);

    router.get("/auto/targa", Auto.findByTarga);

    router.get("/auto/:id", Auto.findOne);

    router.put("/auto/update/:id", Auto.update);

    router.delete("/auto/elimina/:id", Auto.delete);
}
