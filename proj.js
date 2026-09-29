function checkResult() {

    let studentName = document.getElementById("studentName").value;

    let htmlScore = Number(document.getElementById("htmlScore").value);
    let cssScore = Number(document.getElementById("cssScore").value);
    let javascriptScore = Number(document.getElementById("javascriptScore").value);
`+`
    let total = htmlScore + cssScore + javascriptScore;

    let average = total / 3;

    let grade;

    if (average >= 70) {
        grade = "A";
    } 
    else if (average >= 60) {
        grade = "B";
    } 
    else if (average >= 50) {
        grade = "C";
    } 
    else if (average >= 45) {
        grade = "D";
    } 
    else if (average >= 40) {
        grade = "E";
    } 
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        "Hello " + studentName +
        "<br>Total Score: " + total +
        "<br>Average: " + average.toFixed(2) +
        "<br>Grade: " + grade;
}