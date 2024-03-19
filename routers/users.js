const express = require('express');

const { handleUserLogin, handleUserSignup, handleUserLogout } = require("../controller/users");

const router = express.Router();

// router.post('/login', handleUserLogin);
router.post('/login', (req, res) => {
    res.send("Login page")
});

router.post('/signup', handleUserSignup);

router.get('/logout', handleUserLogout);


module.exports = router;