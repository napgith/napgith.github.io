// function to progress to next stage 
var chair3 = function() {
    alert('The small chair is the right option......good job');
    location.replace("bed_stage.html");
}

// function to end game 
var chair1 = function() {
    alert('Oops...Goldilocks chose the Big chair..... too high');
    location.replace("game_over2.html");
}

// function to end game  
var chair2 = function() {
    alert('....Goldilocks chose the medium chair, wrong  option..... a bit too high');
    location.replace("game_over2.html");
}