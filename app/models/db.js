/*const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

//Creazione della connessione al DataBase
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
})

//Apertura della connessione a MySQL
connection.connect(error =>{
    if (error){
        console.log("non riesco a connettermi al db")
        throw  error;

    }
    console.log("Sono connesso al DataBase")
})

module.exports = connection;*/