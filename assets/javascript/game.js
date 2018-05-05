
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

//uh...clicking img crystals will add the data-crystal value from the particular crystal
//to the player's total score value
$(".img-crystal").on("click", function () {
    currentYourScore = $(".yourScoreNum").text();
    currentYourScore = parseInt(currentYourScore) + parseInt($(this).attr("data-crystal"));
    $(".yourScoreNum").text(currentYourScore);
    //run a function to check if you win or lose
    checkStatus();
})

function checkStatus() {
    //check if the player score is equal to target score, if so, increase win, run reset
    //else check if the player score is gerater than target score, if so, increase loss, run reset
    //else do nothing.
    if (currentYourScore === targetNumber) {
        wins++;
        $(".win-counter").text(wins);
        alert("Well done, you win! Your current win count is at: " + wins)
        initializeGame();
    }
    else if (currentYourScore > targetNumber) {
        losses++;
        $(".loss-counter").text(losses);
        alert("Oh no, you went over target and lost! Your current loss count is at: " + losses)
        initializeGame();
    } else {
        return;
    }
}


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