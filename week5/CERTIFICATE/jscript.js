// Declare any necessary variables.
var score;
var possScore;
// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener("click", newStudent)
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector("#reset").addEventListener("click", reset)
function reset(){
    var clearInfo = [...document.querySelectorAll("input")]
        clearInfo.forEach(function(e, i){
            clearInfo[i].value = ""
        })     
    var clearCert = [...document.querySelectorAll(".cert-data")]
        clearCert.forEach(function(e, i){
            clearCert[i].innerHTML = ""
         })
    }
        // Create a function that instantiates a new student object with the input from the HTML form.
function newStudent(){
    let myStudent = new Student()
    certStudent(myStudent) 
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function certStudent(studentInfo){
    document.querySelector("#certStudentName").innerHTML = studentInfo.name
    document.querySelector("#certClassName").innerHTML = studentInfo.course
    studentInfo.addScores()
    studentInfo.addPossScores()
    studentInfo.convertScores(score, possScore)  
}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function myConvert(arry){
    arry.forEach((e, i) => (arry[i] = Number(arry[i])))
}
///worked with D.caviness, assisted by E.yarborough