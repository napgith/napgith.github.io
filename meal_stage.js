// function to progress to next stage 
var big = function() {
    alert('.....Goldilocks chose the big bowl..... wrong option');
    location.replace("game_over2.html");
}


// function to end game 
var medium = function() {
    alert('.....Goldilocks chose the medium bowl..... wrong option');
    location.replace("game_over2.html");
}

// function to end game 
var small = function() {
    alert('The small bowl......right option');
    location.replace("chair_stage.html");
}