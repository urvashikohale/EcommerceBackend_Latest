const express = require('express');
const router = express.Router();
const { check , validationResult} = require('express-validator');

const{signout,signup,signin, isSignedIn}= require("../controllers/auth");

//express validator used here[]//
router.post("/signup",[
    check("name", "name should be at least 3 character ").isLength({min:3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 character").isLength({min:1 }),
],signup
);

router.post("/signin",[
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({min:1 }),
],signin
);

router.get("/signout",signout);


module.exports= router;