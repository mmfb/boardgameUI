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

    static prepareUIforPlaying() {
        GameInfo.endturnButton.show();
    }

    static prepareUIforWaiting() {
        GameInfo.endturnButton.hide();
    }
}