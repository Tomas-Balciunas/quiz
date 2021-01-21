const q1 = {
    q: "In CSS, what is the correct option to select all the tags on a page?",
    answers: [
    {answer: ".p { }", id: false},
    {answer: "<p> { }", id: false},
    {answer: "p { }", id: true},
    {answer: "#p { }", id: false}
]};

const q2 = {
    q: "Which operator is used to assign a value to a variable?",
    answers: [
    {answer: "&&", id: false},
    {answer: "=", id: true},
    {answer: "/", id: false},
    {answer: "*", id: false}
]};

const q3 = {
    q: "What is the use of 'defer' attribute?",
    answers: [
    {answer: "It defers rendering of html page", id: false},
    {answer: "It defers rendering of css attributes", id: false},
    {answer: "None of the mentioned", id: false},
    {answer: "It defers script execution until the page has been rendered", id: true}
]};

const q4 = {
    q: "Which property is used to create space between the element’s border and its inner content?",
    answers: [
    {answer: "Border", id: false},
    {answer: "Padding", id: true},
    {answer: "Margin", id: false},
    {answer: "Spacing", id: false}
]};

const q5 = {
    q: "The snippet that has to be used to check whether 'a' is not equal to 'null' is:",
    answers: [
    {answer: "if (a!==null)", id: true},
    {answer: "if (a!=null)", id: false},
    {answer: "if (!a)", id: false},
    {answer: "if (a!null)", id: false}
]};

const q6 = {
    q: "Which directive allows you to use mixins within your Sass file?",
    answers: [
    {answer: "@keyframes", id: false},
    {answer: "@extend", id: false},
    {answer: "@mixin", id: false},
    {answer: "@include", id: true}
]};

const q7 = {
    q: "Which is the correct way to call a function named 'myFunction'?",
    answers: [
    {answer: "function call myFunction()", id: false},
    {answer: "call myFunction()", id: false},
    {answer: "myFunction()", id: true},
    {answer: "All of them", id: false}
]};

const q8 = {
    q: "When an empty statement is encountered, JavaScript interpreter:",
    answers: [
    {answer: "Ignores the statement", id: true},
    {answer: "Prompts to complete the statement", id: false},
    {answer: "Throws an error", id: false},
    {answer: "Throws an exception", id: false}
]};

const q9 = {
    q: "The unordered collection of properties, each of which has a name and a value is called:",
    answers: [
    {answer: "String", id: false},
    {answer: "Array", id: false},
    {answer: "Serialized Object", id: false},
    {answer: "Object", id: true}
]};

const q10 = {
    q: "What does HTML stand for?",
    answers: [
    {answer: "Hypertext and Links Markup Language", id: false},
    {answer: "How To Make Lasagna", id: true},
    {answer: "Hypertext Markup Language", id: false},
    {answer: "Hightext Machine Language", id: false}
]};

let answers = document.querySelector(".answers");
let rip = document.querySelector(".rip");
let blank = document.querySelector(".blank");
let button = document.querySelector(".begin");
let reset = document.querySelector(".reset");

let arr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
let arrloop = arr;

function clear() {
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
}

function success () {
    blank.innerHTML = "Congratulations, you won!";
}

function failure () {
    blank.innerHTML = "";
    rip.style.display = "flex";
    arrloop = arr;
}

function restart () {
    arrloop = arr;
    rip.style.display = "none";
    reset.style.display = "none";
    button.style.display = "block";
    document.querySelector(".question").style.display = "none";
    clear();
}

reset.addEventListener("click", restart)
button.addEventListener("click", loop) 

function loop() {
    reset.style.display = "block";
    button.style.display = "none";
    document.querySelector(".question").style.display = "block";
    clear();
    blank.innerHTML = arrloop[0].q;
    arrloop[0].answers.forEach(element => {
        let div = document.createElement("div");
        const p = document.createElement("p");
        p.innerHTML = element.answer;
        answers.appendChild(div);
        div.appendChild(p);

        div.addEventListener("click", function(event) {
            if ((element.id) == true) {
                div.classList.add("success");
                arrloop = arrloop.slice(1);
                setTimeout(function() {
                    loop();
                }, 1000)
            } else {
                div.style.backgroundColor = "red";
                failure();
            }
        })
    });
};




