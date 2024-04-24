// function to progress to next stage 
var meal_stage = function() {
    alert('Goldilocks is entering the house.........');
    location.replace("meal_stage.html");
}

// function to end game 
var home = function() {
    alert('Goldilocks chose to head back home.......goodbye');
    location.replace("game_over2.html");
}