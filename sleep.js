// function to progress to next stage 
var walk = function() {
    alert('Goldilocks chose to walk......wrong choice');
    // link to another page. location.replace disables the back button
    location.replace('game_over2.html');
}

// function to end game  
var jog = function() {
    alert('Goldilocks chose to jog..... bad choice');
    // link to another page.
    location.replace("game_over2.html");
}

// function to end game  
var run = function() {
    alert('Goldilocks chose to run..... right choice');
    // link to another page.
    location.replace("the_end.html");
}