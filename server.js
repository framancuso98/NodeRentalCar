const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(cors());





/*var corsOptions = {
    origin: "htttp://localhost:4200"
};*/

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
require("./app/routes/auth.routes")(app);

/*app.listen(3000, () => {
    console.log("Il server è attivo sulla porta 3000");
});*/

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Il server è attivo sulla porta ${PORT}`);
});