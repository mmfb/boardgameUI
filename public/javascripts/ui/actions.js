async function getGameInfo() {
    let result = await requestPlayerGame();
    if (!result.successful) {
        alert("Something is wrong with the game please login again!");
        window.location.pathname = "index.html";
    } else {
        GameInfo.game = result.game;
        if (GameInfo.scoreBoard) GameInfo.scoreBoard.update(GameInfo.game); 
        else GameInfo.scoreBoard = new ScoreBoard(GameInfo.game);
    }
}


async function getBoardInfo() {
    let result = await requestBoardInfo();
    if (!result.successful) {
        alert("Something is wrong with the game please login again!");
        window.location.pathname = "index.html";
    } else {
        GameInfo.columns = result.columns;
        let oppNames = [];
        for (let opp of GameInfo.game.opponents)
            oppNames.push(opp.name);
        
        if (GameInfo.board) GameInfo.board.update(GameInfo.columns); 
        else GameInfo.board = new Board(GameInfo.columns, 
            GameInfo.game.player.name, GameInfo.game.opponents[0].name,
                400,150,600,250,30,GameInfo.images.boardbg,GameInfo.images.dice);
    }
}

async function rollAction() {
    let result = await requestRollDice();
    GameInfo.dice.roll(result.dice);
    await getGameInfo();
    GameInfo.prepareUI();      
}