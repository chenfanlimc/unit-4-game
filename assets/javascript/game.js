
//set variables
var targetNumber;
var crystalNumber;
var crystalVal;
var wins = 0;
var losses = 0;
var currentYourScore;


//add random number between 1 - 12 to crystals as child divs
//add random number between 19 and 120 for target div
initializeGame();

//plays a sound when triggered
function playRupee() {
    if (losses < 4) {
        var audio = document.getElementById("rupee");
        var clone = audio.cloneNode(true);
        clone.play();
    }
}

function playWin() {
    var audio = document.getElementById("win");
    var clone = audio.cloneNode(true);
    clone.play();
}

function playLose() {
    var audio = document.getElementById("lose");
    var clone = audio.cloneNode(true);
    clone.play();
}

function playGameOver() {
    var audio = document.getElementById("gameOver");
    var clone = audio.cloneNode(true);
    clone.play();
}

//uh...clicking img crystals will add the data-crystal value from the particular crystal
//to the player's total score value
$(".img-crystal").on("click", function () {
    if (losses < 4) {
        currentYourScore = $(".yourScoreNum").text();
        currentYourScore = parseInt(currentYourScore) + parseInt($(this).attr("data-crystal"));
        $(".yourScoreNum").text(currentYourScore);
        //run a function to check if you win or lose, wait for 10 milliseconds to allow DOM to update before alert takes over
        setTimeout(function () { checkStatus(); }, 10);
    }
})

function heartContainerCheck() {
    if (losses === 1) {
        $(".firstHeart").hide();
    }
    if (losses === 2) {
        $(".secondHeart").hide();
    }
    if (losses === 3) {
        $(".thirdHeart").hide();
    }
    if (losses === 4) {
        $(".finalHeart").hide();
    }
}

function endGame() {
    alert("You've run out of lives. Please play again.")
    playGameOver();
}

function checkStatus() {
    //check if the player score is equal to target score, if so, increase win, run reset
    //else check if the player score is gerater than target score, if so, increase loss, run reset
    //else do nothing.
    if (currentYourScore === targetNumber) {

        wins++;
        $(".win-counter").text(wins);
        playWin();
        alert("Well done, you win! Your current win count is at: " + wins)
        initializeGame();
    }
    else if (currentYourScore > targetNumber) {
        playLose();
        losses++;
        $(".loss-counter").text(losses);
        heartContainerCheck();
        playLose();
        alert("Oh no, you went over target and lost! Your current loss count is at: " + losses)
        if (losses !== 4) {
            initializeGame();
        } else {
            endGame();
        }

    } else {
        return;
    }
}

//resets everything, recalculates random numbers, gets game ready to run again
function initializeGame() {
    currentYourScore = 0;
    $(".yourScoreNum").text(currentYourScore)
    targetNumber = 19 + Math.floor(Math.random() * (101));
    $(".targetScore").text(targetNumber);
    for (var i = 1; i < 5; i++) {
        var crystalNumber = 1 + Math.floor(Math.random() * (11));
        var crystalVal = $(".crystal" + i);
        crystalVal.attr("data-crystal", crystalNumber);
        crystalVal.text(crystalNumber);
    }
}