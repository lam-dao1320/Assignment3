/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyRate = 35;
let dayCounter = 0;
var index = 0;

const mon = document.getElementById("monday");
const tue = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thu = document.getElementById("thursday");
const fri = document.getElementById("friday");

const dayList = [mon,tue,wed,thu,fri];

const full = document.getElementById("full");
const half = document.getElementById("half");

const clearButt = document.getElementById("clear-button");
const costTxt = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


for(index = 0; index < dayList.length; index ++){
    dayList[index].addEventListener('click', function(){
        if(!this.classList.contains('clicked')) {
            dayCounter++;
            this.classList.add('clicked');
        }
        calculateCost();
    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButt.addEventListener('click', function(){
    for(index = 0; index < dayList.length; index++){
        dayList[index].classList.remove('clicked');
    }
    dayCounter=0;
    calculateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener('click', function(){
    full.classList.remove('clicked');
    half.classList.add('clicked');
    dailyRate=20;
    calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener('click', function(){
    half.classList.remove('clicked');
    full.classList.add('clicked');
    dailyRate = 35;
    calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    costTxt.innerHTML = dayCounter*dailyRate;
};