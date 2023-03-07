// All the variables for the game UI
// we only have one game info so everything is static
class GameInfo  {
    // constants
    static width = 1200;
    static height = 600;
    
    // global variables
    static loading = true;

    // data
    static game;
    static columns;
    static images = {};
    static sounds = {};
    
    // renderers
    static scoreBoard;
    static dice;
    static board;

    // buttons
    static rollButton;

    // methods
    static prepareUI() {
        if (GameInfo.game.player.state == "Roll") {
            GameInfo.rollButton.show();
        } else {
            GameInfo.rollButton.hide();
        }
    }
}