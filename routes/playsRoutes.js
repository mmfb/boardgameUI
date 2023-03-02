const express = require('express');
const router = express.Router();
const Play = require("../models/playsModel");
const auth = require("../middleware/auth");

router.post('/dices', auth.verifyAuth, async function (req, res, next) {
    try {
        console.log("Roll dice");
        console.log(req.game);
        if (!req.game) {
            res.status(400).send({msg:"You are not at a game, please create or join a game"});
        } else if (req.game.player.state.name != "Roll") {
            res.status(400).send({ msg: "You cannot roll the dice at this time" });
        } else {
            let result = await Play.rollDice(req.game);
            res.status(result.status).send(result.result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;