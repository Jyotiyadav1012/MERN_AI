console.log("Welcome to the JavaScript project!");
let studentName = "John Doe";
let Age = 20;
let isLearningJS = true;
let subjects = ["Math", "Science", "History"];

let student = {
    name: "John Doe",
    age: 20,
    isLearningJS: true,
    subjects: ["Math", "Science", "History"],
    email: "ramesh@gmail.com"
};
if(isLearningJS == true) {
    console.log(`Hi ${studnetName}, your age is ${age}, you are learning javascript and your subjects are: ${subjects}`);
}
else {
    console.log(`Hi ${studentName}, your age is ${age}, you are not learning javascript and your subjects are: ${subjects}`);
}

let output = document.getElementById("output");
output.innerHTML = `<h1>Welcome to the JavaScript project!</h1>
<p>Student Name: ${studentName}</p>
<p>Age: ${Age}</p>
<p>Learning JavaScript: ${(isLearningJS == true)? 'YES' : 'NO'}</p>
<p>Subjects: ${subjects.join(", ")}</p>
<p>Email: ${student.email}</p>`;