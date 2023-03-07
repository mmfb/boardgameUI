// All the variables for the game UI
// we only have one game info so everything is static
class GameInfo  {
    static width = 1200;
    static height = 600;

    static game;
    static images = {};
    static sounds = {};
    

    static scoreBoard;
    static dice;

    static loading = true;


    // buttons
    static endturnButton;
    static rollButton;

    static prepareUI() {
        if (GameInfo.game.player.state == "Roll") {
            GameInfo.rollButton.show();
        } else {
            GameInfo.rollButton.hide();
        }
    }


}