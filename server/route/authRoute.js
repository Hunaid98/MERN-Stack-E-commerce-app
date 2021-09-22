const express = require("express");
const router = express.Router();
const {signUp, login, forgotPassword} = require("../controllers/authControllers")

router.post("/signup", signUp)
router.post("/login", login);


// function performSignIn() {

//     let headers = new Headers();
  
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
  
//     headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
//     headers.append('Access-Control-Allow-Credentials', 'true');
  
//     headers.append('GET', 'POST', 'OPTIONS');
// }
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password/:token", resetPassword);

module.exports = router;
