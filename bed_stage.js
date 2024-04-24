// function to progress to next stage 
var small = function() {
    alert('...Goldilocks chose the small bed......right choice');
    // link to another page. location.replace disables the back button
    location.replace('sleepstage.html');
}

// function to end game  
var big = function() {
    alert('..Goldilocks chose the big bed..... too big, wrong choice');
    // link to another page.
    location.replace("game_over2.html");
}

// function to end game  
var medium = function() {
    alert('...Goldilocks chose the medium bed..... wrong choice');
    // link to another page.
    location.replace("game_over2.html");
}