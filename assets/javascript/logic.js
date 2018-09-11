var crystal1 = "assets/images/blue.jpg";
var crystal2 = "assets/images/green.jpg";
var crystal3 = "assets/images/purp.jpg";
var crystal4 = "assets/images/red.jpg";


var crystals = [crystal1, crystal2, crystal3, crystal4];
var points = 0
var wins = 0
var losses = 0
var crystalVal = []

var crystalIds = ["crystal1", "crystal2", "crystal3", "crystal4"]

// MAJOR TASK #1: DYNAMICALLY CREATE CRYSTAL IMAGES as buttons
// =================================================================================

// 1. Create a for-loop to iterate through the letters array.
for (var i = 0; i < crystals.length; i++) {

    // Inside the loop...

    // 2. Create image tags
    var crystalBtn = $("<button>");
    // 3. adding attributes to the crystal images
    crystalBtn.attr("src", crystals[i]);
    crystalBtn.attr("id", crystalIds[i]);
    crystalBtn.attr("style", "width:50px; height:50px");
    // crystalBtn.attr("data-num", values[i]);
    crystalBtn.addClass(crystalIds[i]);
    // 4. Finally, append each crystal images
    $("#crystals").append(crystalBtn);

}

//Function to assign random values from 1-11 everytime it's run
function crystal() {
    while (crystalVal.length < 4) {
        var num = Math.floor(Math.random() * (13 -1)) + 1;
        //takes the random value and pushes it to crystalVal, which is an empty array
        if(crystalVal.indexOf(num) > -1) continue;
        crystalVal[crystalVal.length] = num;
        console.log(crystalVal);
    }
}

crystal();

$("#crystal1").on("click", function () {
    points += crystalVal[0];
    $("#yourPoints").text(points);
    checkPlayerScore();
})

$("#crystal2").on("click", function () {
    points += crystalVal[1];
    $("#yourPoints").text(points);
    checkPlayerScore();
})

$("#crystal3").on("click", function () {
    points += crystalVal[2];
    $("#yourPoints").text(points);
    checkPlayerScore();
})

$("#crystal4").on("click", function () {
    points += crystalVal[3];
    $("#yourPoints").text(points);
    checkPlayerScore();
})



//Math function to select a random number
//This function still returns 0 at times, need to fix that
function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//This function calling on the random number function
//But setting a certain parameter
//Keeping it within 100 but only divisible by 5

//Variable to call on the function that makes random num
var actualRandNum = getRandomInt(120, 19);
$("#randScore").text("This is the number you're trying to get to! " + actualRandNum);

console.log(actualRandNum);

//Function to compare for a win or loss
function checkPlayerScore() {
    if (points == actualRandNum) {
        console.log("hey you won");
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();
    }
    else if (points > actualRandNum) {
        console.log("you went over, you lose");
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();
    }
}

//Reset function to reset variables that need resetting
function reset() {
    points = 0
    crystalVal = []
    crystal();
    console.log(crystalVal)
    $("#yourPoints").text(points);
    actualRandNum = getRandomInt(120, 19);
    $("#randScore").text("This is the number you're trying to get to! " + actualRandNum);
    console.log(actualRandNum);
}