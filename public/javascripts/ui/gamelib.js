
async function refresh() {
    if (GameInfo.game.player.state == "Waiting") { 
        // Every time we are waiting
        await  getGameInfo();       
        if (GameInfo.game.player.state != "Waiting") {
            // The moment we pass from waiting to play
            GameInfo.prepareUI();
        }
    } 
    // Nothing to do when we are playing since we control all that happens 
    // so no update is needed from the server
}

function preload() {
    GameInfo.images.dice = loadImage("/assets/dice.png");
    GameInfo.sounds.dice = loadSound("/assets/dice.flac");
}

async function setup() {
    let canvas = createCanvas(GameInfo.width, GameInfo.height);
    canvas.parent('game');
    // preload  images
    
    await  getGameInfo();
    setInterval(refresh,1000);

    //buttons (create a separated function if they are many)

    GameInfo.rollButton = createButton('Roll Dice');
    GameInfo.rollButton.parent('game');
    GameInfo.rollButton.position(180,200);
    GameInfo.rollButton.mousePressed(rollAction);
    GameInfo.rollButton.addClass('game');


    GameInfo.prepareUI();
    
    GameInfo.dice = new Dice(1,50,150,100,100,
        GameInfo.images.dice,GameInfo.sounds.dice);


    GameInfo.loading = false;
}

function draw() {
    background(220);
    if (GameInfo.loading) {
        textAlign(CENTER, CENTER);
        textSize(40);
        fill('black');
        text('Loading...', GameInfo.width/2, GameInfo.height/2);
    } else {
        GameInfo.scoreBoard.draw();
        GameInfo.dice.draw();
    }
}

async function mouseClicked() {
  
}

