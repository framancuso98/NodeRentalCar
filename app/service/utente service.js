const Utente = require("../models/utente.model");
const validator = require("validator");



   /* validator.validaUtente = (utente, result) => {
        if (validator.isEmail(utente.username)) {
            console.log("email ok");
            if (validator.isLength(utente.password, { min: 5, max: 16 })) {
                console.log("password ok");
                if (validator.isLength(utente.nome, { min: 2, max: 30 })) {
                    console.log("nome ok");
                    if (validator.isLength(utente.cognome, { min: 2, max: 30 })) {
                        console.log("cognome ok");
                        if (!validator.isEmpty(utente.data_nascita)){
                            console.log("data ok");
                            result = true;
                            return result;
                        } else {
                            console.log("formato data no valido!!");
                            result = false;
                            return result;
                        }
                    } else {
                        console.log("formato cognome no valido!!");
                        result = false;
                        return result;
                    }
                } else {
                    console.log("formato nome no valido!!");
                    result = false;
                    return result;
                }
            } else {
                console.log("formato password no valido!!");
                result = false;
                return result;
            }
        } else {
            console.log("formato email no valido!!");
            result = false;
            return result;
        }

    }
    setImmediate(function usernameValid(username, result) {
        Utente.findByUsername(username, (err, data) => {
            console.log(username);
            if (data === null){
                console.log("username disponibile");
                result = true;
                return result;
            }else {
                console.log("username non disponibile");
                result = false;
                return result;
            }
        });
    });*/





/*validator.validaUtente = (utente, result) => {
    const ut = Utente.findByUsername(utente.username);
    if (ut == null) {
        console.log("username valido");
        console.log(utente.username);
        if (validator.isEmail(utente.username)) {
            console.log("email ok");
            if (validator.isLength(utente.password, {min: 5, max: 16})) {
                console.log("password ok");
                if (validator.isLength(utente.nome, {min: 2, max: 30})) {
                    console.log("nome ok");
                    if (validator.isLength(utente.cognome, {min: 2, max: 30})) {
                        console.log("cognome ok");
                        result = true;
                        return result;
                    } else {
                        console.log("formato cognome no valido!!");
                        result = false;
                        return result;
                    }
                } else {
                    console.log("formato nome no valido!!");
                    result = false;
                    return result;
                }
            } else {
                console.log("formato password no valido!!");
                result = false;
                return result;
            }
        } else {
            console.log("formato email no valido!!");
            result = false;
            return result;
        }
    } else{
        console.log("Username non disponibile");
        result = false;
        return result;
    }
};*/


module.exports = validator;