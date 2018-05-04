
//sets the random target number between 19 to 120
var targetNumber = 19 + Math.floor(Math.random() * (101));
$(".targetScore").text(targetNumber);

//add random number between 1 - 12 to crystals as child divs
for(var i = 1; i < 5; i++) {
    var crystalNumber = 1 + Math.floor(Math.random() * (11));
    var crystalVal = $(".crystal"+i);
    crystalVal.attr("data-crystal", crystalNumber);
    crystalVal.text(crystalNumber);
}

//uh...clicking img crystals will add the data-crystal value from the particular crystal
//to the player's total score value
$(".img-crystal").on("click", function(){
    var currentYourScore = $(".yourScoreNum").text();
    currentYourScore = parseInt(currentYourScore) + parseInt($(this).attr("data-crystal"));
    $(".yourScoreNum").text(currentYourScore);
})