// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
//The class should also contain the following methods
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
class Student{
    constructor(){
        this.name = document.querySelector("#studentName").value
        this.course = document.querySelector("#className").value
        this.scores = document.querySelector("#studentScores").value.split(",")
        this.pScores = document.querySelector("#possibleScores").value.split(",")
    }
    addScores(){
        myConvert(this.scores)
        score = this.scores.reduce((preValue, currValue) => (preValue + currValue))
    }
    addPossScores(){
        myConvert(this.pScores)
        possScore = this.pScores.reduce((preValue, currValue) => (preValue + currValue))
        console.log(possScore)
    }
    convertScores(recentScore, possiScore){
        if ((recentScore / possiScore) * 100 >= 100){
            document.querySelector("#certGrade").innerHTML = "A+"
        }
        else if ((recentScore / possiScore) * 100 >= 95 && (recentScore / possiScore) * 100 < 100){
            document.querySelector("#certGrade").innerHTML = "A-"
        }
        else if ((recentScore / possiScore) * 100 >= 90 && (recentScore / possiScore) * 100 < 95){
            document.querySelector("#certGrade").innerHTML = "B+"
        }
        else if ((recentScore / possiScore) * 100 >= 85 && (recentScore / possiScore) * 100 < 90){
            document.querySelector("#certGrade").innerHTML = "B-"
        }
        else if ((recentScore / possiScore) * 100 >= 80 && (recentScore / possiScore) * 100 < 85){
            document.querySelector("#certGrade").innerHTML = "C+"
        }
        else if ((recentScore / possiScore) * 100 >= 75 && (recentScore / possiScore) * 100 < 80){
            document.querySelector("#certGrade").innerHTML = "C-"
        }
        else if ((recentScore / possiScore) * 100 >= 70 && (recentScore / possiScore) * 100 < 75){
            document.querySelector("#certGrade").innerHTML = "D+"
        }
        else if ((recentScore / possiScore) * 100 >= 65 && (recentScore / possiScore) * 100 < 70){
            document.querySelector("#certGrade").innerHTML = "D-"
        }
        else {
            document.querySelector("#certGrade").innerHTML = "F"
        } 
    }
}