// TIME RELATED VARIABLES
var today = moment();
var time = (today.format("h a"));

// TELL THE DATE AND TIME
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

var timeDiv = $('.custom-time');
var inputTextDiv = $('.custom-text');

console.log(timeDiv[0]);

function tellTime(){

    for (var i = 0; i < timeDiv[i].outerText; i++){
        console.log(timeDiv[i]);   
    }

    if (time >= timeDiv[i].outerText){
        inputTextDiv.addClass('bg-success');
    } 
    else if (time == timeDiv[i].outerText) {
        inputTextDiv.addClass('bg-danger');
    }
    else if (time <= timeDiv[i].outerText){
        inputTextDiv.addClass('bg-secondary');
    }

    console.log(time);
    console.log(timeDiv[0].outerText);

};

tellTime();