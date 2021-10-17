
// Declare any necessary variable
var queryType;
var itemID;
// define a function called 'fetchData()' that passes the values from // the 'queryType' and 'itemID' elements in starwars.html to the function // called 'getFromSWAPI()'
function fetchData() {
    queryType=document.querySelector('#queryType').value;
    itemID=document.querySelector('#itemID').value;
    getFromSWAPI(queryType, itemID)
} 
function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.
function updateInfo(data){
    var myKey=Object.keys(data)
    document.querySelector('#dataValue1').textContent=data[myKey[0]];
    document.querySelector('#dataValue2').textContent=data[myKey[3]];
    document.querySelector('#dataLabel1').textContent=myKey[0];
    document.querySelector('#dataLabel2').textContent=myKey[3];

}
///dot notation to store HTML elements. preffered queryselector tells you what to pull out of HTML doc. 
// /*
// <div id='ResponseData' class='dataWrapper'>
// <div class='dataCellLabel' id='dataLabel1'></div>
// <div class='dataCell' id='dataValue1'></div>
// <div class='dataCellLabel' id='dataLabel2'></div>
// <div class='dataCell' id='dataValue2'></div>
// </div>*/