var crystal1 = "assets/images/blue.jpg";
var crystal2 = "assets/images/green.jpg";
var crystal3 = "assets/images/purp.jpg";
var crystal4 = "assets/images/red.jpg";


var crystals = [crystal1, crystal2, crystal3, crystal4];
var points = 0
var total = []

var crystalIds = ["crystal1", "crystal2", "crystal3", "crystal4"]

// MAJOR TASK #1: DYNAMICALLY CREATE CRYSTAL IMAGES as buttons
// =================================================================================

// 1. Create a for-loop to iterate through the letters array.
for (var i = 0; i < crystals.length; i++) {

    // Inside the loop...

    // 2. Create image tags
    var crystalBtn = $("<button>");
    var values = ["5", "10", "15", "20"];
    // 3. adding attributes to the crystal images
    crystalBtn.attr("src", crystals[i]);
    crystalBtn.attr("id", crystalIds[i]);
    crystalBtn.attr("style", "width:50px; height:50px");
    // crystalBtn.attr("data-num", values[i]);
    crystalBtn.addClass(crystalIds[i]);
    // 4. Finally, append each crystal images
    $("#crystals").append(crystalBtn);

}


//redo this part dynamically
$("#crystal1").on("click", function () {
    points += 5;
    $("#yourPoints").text(points);
})

$("#crystal2").on("click", function () {
    points += 10;
    $("#yourPoints").text(points);
})

$("#crystal3").on("click", function () {
    points += 15;
    $("#yourPoints").text(points);
})

$("#crystal4").on("click", function () {
    points += 20;
    $("#yourPoints").text(points);
})



//math function to select a random number

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//this function calling on the random number function
//but setting a certain parameter
//keeping it within 100 but only divisible by 5
function randNum() {
    return getRandomInt(100 / 10, 1 / 10) * 5 + 5;
    total.push(getRandomInt);
}

$("#randScore").text(randNum());
console.log(getRandomInt(100 / 10, 1 / 10) * 5 + 5);

function checkPlayerScore() {
    var checkYourPoints = $("#yourPoints").text(points);

    if (checkYourPoints === total){
        console.log("hey you won");
}
}

checkPlayerScore();