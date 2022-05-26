// TIMER VARIABLES
var today = moment();
var actualTime = (today.format("HH"));
var timeDiv = $('.custom-time');
var inputTextDiv = $('.custom-text');
var saveBtn = $('.btn');

// TEXT VARIABLES
var textNine = $('input#text-9[type=text]');
var btnNine = $('#btn-9');
var textTen = $('input#text-10[type=text]');
var btnTen = $('#btn-10');
var textEleven = $('input#text-11[type=text]');
var btnEleven = $('#btn-11');
var textTwelve = $('input#text-12[type=text]');
var btnTwelve = $('#btn-12');
var textOne = $('input#text-13[type=text]');
var btnOne = $('#btn-13');
var textTwo = $('input#text-14[type=text]');
var btnTwo = $('#btn-14');
var textThree = $('input#text-15[type=text]');
var btnThree = $('#btn-15');
var textFour = $('input#text-16[type=text]');
var btnFour = $('#btn-16');
var textFive = $('input#text-17[type=text]');
var btnFive = $('#btn-17');

$(document).ready(function() {

    // TELL THE DATE AND TIME
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

    // FUNCTION TO MAKE COLOURS CHANGED BASED ON TIME OF DAY
    function tellTime(){

        $.each(inputTextDiv, function( index, value ) {

            //console.log(actualTime);
            //console.log(value.dataset.time);

            if (actualTime > value.dataset.time) {
                $(this).addClass('bg-secondary');
            } 
            else if (actualTime < value.dataset.time) {
                $(this).addClass('bg-success');
            }
            else if (actualTime == value.dataset.time){
                $(this).addClass('bg-danger');
            }
        });

    };

    // SAVING TEXT INPUTS TO LOCAL STORAGE
    textNine.val((localStorage.getItem('nineAmTask')));
    textTen.val((localStorage.getItem('tenAmTask')));
    textEleven.val((localStorage.getItem('elevenAmTask')));
    textTwelve.val((localStorage.getItem('twelvePmTask')));
    textOne.val((localStorage.getItem('onePmTask')));
    textTwo.val((localStorage.getItem('twoPmTask')));
    textThree.val((localStorage.getItem('threePmTask')));
    textFour.val((localStorage.getItem('fourPmTask')));
    textFive.val((localStorage.getItem('fivePmTask')));

    btnNine.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('nineAmTask', textNine.val());
        console.log((localStorage.getItem('nineAmTask')));
        console.log(textNine.val());
        });

    btnTen.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('tenAmTask', textTen.val());
        console.log((localStorage.getItem('tenAmTask')));
        console.log(textTen.val());
        });

    btnEleven.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('elevenAmTask', textEleven.val());
        console.log((localStorage.getItem('elevenAmTask')));
        console.log(textEleven.val());
        });

    btnTwelve.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('twelvePmTask', textTwelve.val());
        console.log((localStorage.getItem('twelvePmTask')));
        console.log(textTwelve.val());
        });

    btnOne.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('onePmTask', textOne.val());
        console.log((localStorage.getItem('onePmTask')));
        console.log(textOne.val());
        });

    btnTwo.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('twoPmTask', textTwo.val());
        console.log((localStorage.getItem('twoPmTask')));
        console.log(textTwo.val());
        });

    btnThree.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('threePmTask', textThree.val());
        console.log((localStorage.getItem('threePmTask')));
        console.log(textThree.val());
        });

    btnFour.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('fourPmTask', textFour.val());
        console.log((localStorage.getItem('fourPmTask')));
        console.log(textFour.val());
        });

    btnFive.on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('fivePmTask', textFive.val());
        console.log((localStorage.getItem('fivePmTask')));
        console.log(textFive.val());
        });

    // RUN FUNCTION
    tellTime();

});