// function to progress to next stage 
var chair3 = function() {
    alert('This Chair is the right option......good job');
    location.replace("bed_stage.html");
}

// function to end game 
var chair1 = function() {
    alert('Oh Oh......Goldilocks chose Chair 1..... too high');
    location.replace("game_over2.html");
}

// function to end game  
var chair2 = function() {
    alert('......Goldilocks chose Chair 2..... too high');
    location.replace("game_over2.html");
}