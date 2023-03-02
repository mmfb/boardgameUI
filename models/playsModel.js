const pool = require("../config/database");
const diceFaces = 6;



class Play {
  
    static async rollDice(game) {
        try {
            let dice = Math.ceil(Math.random() * diceFaces);
            await pool.query(`Update user_game set ug_dice=?, ug_state_id=3 where ug_id = ?`,
                [dice, game.player.id]);

            return { status: 200, result: { msg: "You rolled the dice", dice: dice } };
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }


}

module.exports = Play;