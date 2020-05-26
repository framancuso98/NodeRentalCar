const express = require("express");
const bodyParser = require("body-parser");

const controller = require("./app/controllers/utente.controller");

const router = require("./app/routes/auto.routes")

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

const db = require("./app/models");
/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});*/

app.get("/",(req, res) => {
    res.json({message: "Benvenuti in rental car Node"});
});

require("./app/routes/utente.routes")(app);
require("./app/routes/auto.routes")(app);
require("./app/routes/prenotazione.router")(app);

app.listen(3000, () => {
    console.log("Il server è attivo sulla porta 3000");
});