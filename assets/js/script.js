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
var textNine = $('.text-9');
var btnNine = $('.btn-9')

btnNine.on('click', function(event) {
    event.preventDefault();
    textNine.get((localStorage.getItem('calendarTasks')));
    localStorage.setItem('calendarTasks', textNine.val());

    console.log((localStorage.getItem('calendarTasks')));
    console.log(textNine.val());
})

// RUN FUNCTION
tellTime();

/*$(saveBtn).click(function() {
    inputTextDiv.val(localStorage.getItem('calendarTasks'));
    $(inputTextDiv).each(function() {
        console.log(saveBtn);
        console.log(inputTextDiv);
        localStorage.setItem('calendarTasks', inputTextDiv.val());
    });
});

jQuery.each(saveBtn, function( i, val ) {
    $(this).on('click', function() {
        localStorage.setItem('calendarTasks', inputTextDiv.val());
    })
});

jQuery.each(inputTextDiv, function( i, val ) {
    $(this).on('click', function() {
        inputTextDiv.val(localStorage.getItem('calendarTasks'));
    })
});

    $.each(saveBtn, function () {
        $(this).on("click", function(){
            console.log(this);
            localStorage.setItem('calendarTasks', inputTextDiv.val());
        })
    });
        inputTextDiv.val(localStorage.getItem('calendarTasks'));
        localStorage.setItem('calendarTasks', inputTextDiv.val());*/