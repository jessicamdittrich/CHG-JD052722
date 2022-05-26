// TIMER VARIABLES
var today = moment();
var time = (today.format("h"));
var timeDiv = $('.custom-time');
var inputTextDiv = $('.custom-text');
var saveBtn = $('.btn');

// TELL THE DATE AND TIME
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

// function test(arg){
//     console.log(arg)
// }
// FUNCTION TO MAKE COLOURS CHANGED BASED ON TIME OF DAY
function tellTime(){

    for (var i = 0; i < timeDiv.length; i++){
        if (time >= inputTextDiv[i].dataset.time){
            console.log(timeDiv[i].getAttribute("data-time"))
            inputTextDiv[i].addClass('bg-success');
        } 
        else if (time == inputTextDiv[i].getAttribute("data-time")) {
            inputTextDiv[i].addClass('bg-danger');
        }
        else if (time <= inputTextDiv[i].getAttribute("data-time")){
            inputTextDiv[i].addClass('bg-secondary');
        }

    }

    console.log(time);
    console.log(timeDiv);
    console.log(timeDiv[i]);
    console.log(inputTextDiv);

};

for (var i = 0; i < saveBtn.length; i++){
    saveBtn.on("click", saveInputs);
}

// SAVING TEXT INPUTS TO LOCAL STORAGE
function saveInputs(event) {
    event.preventDefault();

    for (var i = 0; i < inputTextDiv.size; i++){
        inputTextDiv.val(localStorage.getItem('calendarTasks'));
        localStorage.setItem('calendarTasks', inputTextDiv.val());
        console.log(inputTextDiv[0]);
    }

    console.log(inputTextDiv[0]);

};

// RUN FUNCTION
tellTime();


// loads screen and sees date and time
    // edit the dom to reflect current time
        // .text to change html
// write down daily tasks
    // give user a place to write
        // input fields
// save tasks
    // buttons to save
        // write a save function
// save to local storage for persistence
    // button function saves
        // localStorage.setItem
// as hours change so do blocks
    // watch hours and change dom
        // if else
