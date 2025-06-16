console.log("Welcome to the JavaScript project!");
let studentName = "Jyoti";
let Age = 20;
let isLearningJS = true;
let subjects = ["Math", "Science", "History"];

let student = {
    name: "Jyoti",
    age: 21,
    isLearningJS: true,
    subjects: ["Math", "Science", "History"],
    email: "ramesh@gmail.com"
};
if(isLearningJS == true) {
    console.log(`Hi ${studentName}, your age is ${Age}, you are learning javascript and your subjects are: ${subjects}`);
}
else {
    console.log(`Hi ${studentName}, your age is ${Age}, you are not learning javascript and your subjects are: ${subjects}`);
}

let output = document.getElementById("output");

console.log(output);

output.innerHTML = `<h1>Welcome Our Student</h1>
<p><b>Student Name:</b> ${student.name}</p>
<p><b>Age: </b>${student.age}</p>
<p><b>Learning JavaScript:</b> ${(isLearningJS == true)?'YES' : 'NO'}</p>
<p><b>Subjects: </b>${subjects.join(", ")}</p>
<p><b>Email:</b> ${student.email}</p>`;


let countdown = document.getElementById("countdown");
console.log(countdown);


let id;
function startCountdown() {
    let count = 5;
    let cdValue = document.getElementById("countdown-value");
    cdValue.innerHTML = count;
    id = setInterval(function (){count = count - 1;
        cdValue.innerHTML = count;
        if (count == 0) {
            clearInterval(id);
            boomboom()
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(id);
}



function boomboom(){
    countdown.innerHTML = `<h2>Boom Boom!</h2>`
}
function generatePattern(){
    patternOutput.innerHTML = "";
    let number = document.getElementById("num").value;
    for(let i = 1; i <= number; i++){
        for(let j = 1; j <= i; j++){
            let patternOutput = document.getElementById("patternOutput");
            patternOutput.innerHTML += "*";
        }
        patternOutput.innerHTML += `<br>`;
    }
}
