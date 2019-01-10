var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//begin game
var resetAndStart = function () {

//clears
$(".robots").empty();

//images array 
var images = [
    'http://unrestrictedstock.com/wp-content/uploads/free-stock-vector-illustration-set-robots-robot-drawing-cartoon-technology-machine03.jpg',
    'http://unrestrictedstock.com/wp-content/uploads/free-stock-vector-illustration-set-robots-robot-drawing-cartoon-technology-machine05.jpg',
    'http://unrestrictedstock.com/wp-content/uploads/free-stock-vector-illustration-set-robots-robot-drawing-cartoon-technology-machine02.jpg',
    'http://unrestrictedstock.com/wp-content/uploads/free-stock-vector-illustration-set-robots-robot-drawing-cartoon-technology-machine01.jpg'];

//display a random result generator number at the start of the game, from 19-120
random_result = Math.floor(Math.random() * 101 ) + 19; 

//display solution number for player each game
$(".result").html('Generate: ' + random_result);

//create loop for robots, running 4x with each time generating a new number
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11 ) + 1;
    
    //data attr to refresh values
    var robot = $("<div>");
        robot.attr({
            "class": 'robot',
            "data-random": random 
        });

        //plug in var images
        robot.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"contain",
            "background-repeat":"no-repeat"
        });

        // robot.html(random); commented out since used for building the game. displays each new value generated.

    $(".robots").append(robot);
}

$(".previous").html("Robo Count: ", previous);

}

resetAndStart();

//run function for on clicks and results
$(document).on('click', ".robot", function() {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $(".previous").html("Robo Count: " + previous);

    console.log(previous);

    //alert loss
    if(previous > random_result){
       lost++;
       alert("You lost!!");
       $(".lost").html("Defeat: " + lost);

       previous = 0;

       resetAndStart();
    }
    //alert win
    else if(previous === random_result){
        win++;
        alert("You win!!");

        $(".win").html("Victory: " + win);

        previous = 0;
        
        resetAndStart();
    }

});

