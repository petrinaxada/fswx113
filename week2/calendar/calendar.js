
// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep", "Oct", "Nov","Dec"];
var magicBox = document.querySelector("#month");
var selectYear = document.querySelector("#year");
var magicButton = document.querySelector("#magicButton");
magicBox.value = month[0]
selectYear.value = new Date().getFullYear();
window.addEventListener("load",function(){
    if (magicBox.childElementCount<12){
        for(i=0;i<month.length;i++){
            var selectMonth = document.createElement("option");
            selectMonth.textContent = month[i];
            selectMonth.setAttribute("value", month[i]);
            magicBox.appendChild(selectMonth);
            printCalendar();
        }  
    }
});
// modify this script to run a function called printCalendar() when the user clicks the "Go" button
function printCalendar(){
    const today = new Date(`${magicBox.value}/1/${selectYear.value}`)
    const month = today.getMonth()
    let days
    switch (month) {
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8: 
        case 10:
            days = 30
            break
        default:
            days = 31
    }
    document.getElementById('calendarDays').innerHTML = "" 
    let x
    const weekday = today.getDay()
    for (x = 0; x < weekday; x++){
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    }
    let dt = 0
    do {
        dt++
        document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
    } while ( dt < days)
    const remainder = (7 - ((x + dt) % 7))
    let y = 0
    while ( y < remainder) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
        y++
    }
} 
magicButton.addEventListener("click", printCalendar);


// modify this script to use the first day of the month the user selects in place of the const today 