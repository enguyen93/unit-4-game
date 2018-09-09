var crystal1 = "assets/images/blue.jpg";
var crystal2 = "assets/images/green.jpg";
var crystal3 = "assets/images/purp.jpg";
var crystal4 = "assets/images/red.jpg";


var crystals = [crystal1, crystal2, crystal3, crystal4];
var points = 0


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
    crystalBtn.addClass(crystalIds[i]);

    // 4. Finally, append each crystal images
    $("#crystals").append(crystalBtn);

}

$(".pointHolder").text("Your current points go here! " + points)

    $(crystal1).on("click", function () {
        points += 5
})




function compChoice() {
    var randScore = Math.floor(Math.random() * (101 - 35)) + 35;
    return randScore;

}


$("#randScore").text(compChoice());


