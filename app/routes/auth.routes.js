const  verifySignUp = require("../auth/verifySignUp");
//const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const cors = require("cors");

module.exports = router => {



    router.post("/auth", controller.signIn);

    router.post("/signup",
        [
            verifySignUp.checkDuplicateUsername,
            verifySignUp.checkRolesExisted,
        ],

            controller.signup);
}