// Create an event listenter for the 'submit' button that calls the combineLists() function

document.querySelector("#submit").addEventListener("click", combineLists);

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

function combineLists() {
    const arry1 = document.querySelector('#scavenger-0').value.split(",");
    const arry2 = document.querySelector('#scavenger-1').value.split(",");
    const arry3 = document.querySelector('#scavenger-2').value.split(",");
    const arry4 = document.querySelector('#scavenger-3').value.split(",");
    const listArray = [...arry1, ...arry2, ...arry3, ...arry4].sort();
    document.querySelector("#AllItems").innerHTML = listArray.join(" , ");
}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objText.innerHTML)
        objText.innerHTML=source.innerHTML
    else
        objText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(element) {
    element=element || window.event
    return element.target || element.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}