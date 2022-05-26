// TIMER VARIABLES
var today = moment();
var time = (today.format("H"));
var timeDiv = $('.custom-time');
var inputTextDiv = $('.custom-text');
var saveBtn = $('.btn');

// TELL THE DATE AND TIME
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

// FUNCTION TO MAKE COLOURS CHANGED BASED ON TIME OF DAY
function tellTime(){

    $.each(inputTextDiv, function( index, value ) {
        if (time > value.dataset.time) {
            $(this).addClass('bg-secondary');
        } 
        else if (time == value.dataset.time) {
            $(this).addClass('bg-danger');   
        }
        else if (time < value.dataset.time){
            $(this).addClass('bg-success');
        }
        //console.log(value.dataset.time);
        //console.log(this);
    });

};

// SAVING TEXT INPUTS TO LOCAL STORAGE
$(document).ready(function() {

    console.log("document is ready");

    var textNine = $('.text-9');
    var btnNine = $('.btn-9');

    localStorage.setItem('calendarTasks', textNine.val());

    btnNine.on('click', function(event) {
        event.preventDefault();
        textNine.value((localStorage.getItem('calendarTasks')));
        console.log((localStorage.getItem('calendarTasks')));
        console.log(textNine.val());
        });

});

// RUN FUNCTION
tellTime();