(function () {
    "use strict";

    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const dice = document.getElementById("dice");
    const score = document.getElementById("score");
    const score1 = document.getElementById("score1");
    const score2 = document.getElementById("score2");
    const actionArea = document.getElementById("actions");
    const players = document.getElementById("players");
    const playerDivs = [
        document.getElementById("p1"),
        document.getElementById("p2"),
    ];
    const diceSound = new Audio("plipplop.wav");
    const switchSound = new Audio("switch.wav");
    const winSound = new Audio("win.wav");

    let gameData = {
        // dice: [
        //     "1die.jpg",
        //     "2die.jpg",
        //     "3die.jpg",
        //     "4die.jpg",
        //     "5die.jpg",
        //     "6die.jpg",
        // ],
        dice: [
            "1die.png",
            "2die.png",
            "3die.png",
            "4die.png",
            "5die.png",
            "6die.png",
        ],
        players: ["player 1", "player 2"],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
    };

    startGame.addEventListener("click", function () {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = "<h2>The Game Has Started</h2>";
        gameControl.innerHTML += '<button id="quit">Wanna quit?</button>';

        document.getElementById("quit").addEventListener("click", function () {
            location.reload();
        });

        throwDice();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${
            gameData.players[gameData.index]
        }</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById("roll").addEventListener("click", function () {
            throwDice();
        });
    }

    function throwDice() {
        actionArea.innerHTML = "";
        dice.innerHTML = "";
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        dice.innerHTML += `<img class="dice" src="${
            gameData.dice[gameData.roll1 - 1]
        }">
        <img class="dice" src="${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        playerDivs[gameData.index].classList.add("shake");

        setTimeout(function () {
            playerDivs[gameData.index].classList.remove("shake");
        }, 500);

        if (gameData.rollSum === 2) {
            switchSound.play();
            game.innerHTML += "<p>Oh snap! Snake eyes!</p>";
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            checkWinningCondition();
            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            switchSound.play();
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry one of your rolls was a one, switching to ${
                gameData.players[gameData.index]
            }</p>`;
            setTimeout(setUpTurn, 2000);
        } else {
            gameData.score[gameData.index] =
                gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML =
                '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

            document
                .getElementById("rollagain")
                .addEventListener("click", function () {
                    throwDice();
                });

            document
                .getElementById("pass")
                .addEventListener("click", function () {
                    gameData.index
                        ? (gameData.index = 0)
                        : (gameData.index = 1);
                    setUpTurn();
                });
            if (checkWinningCondition()) {
                winSound.play();
            } else {
                diceSound.play();
            }
        }

        function checkWinningCondition() {
            if (gameData.score[gameData.index] > gameData.gameEnd) {
                showCurrentScore();
                score.innerHTML = `<h2>${
                    gameData.players[gameData.index]
                } wins with ${gameData.score[gameData.index]} points!</h2>`;

                actionArea.innerHTML = "";
                document.getElementById("quit").innerHTML = "start new game!";
                return true;
            } else {
                showCurrentScore();
                return false;
            }
        }

        function showCurrentScore() {
            score1.innerHTML = `score: ${gameData.score[0]}`;
            score2.innerHTML = `score: ${gameData.score[1]}`;
        }
    }
})();
