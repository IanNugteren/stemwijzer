var agreed = []
var unAgreed = []
var noChoice = []

const title = document.getElementById("title")
const questionDescription = document.getElementById("question-description")
const hideIntro = document.getElementById("hide-onclick")
const showOptions = document.getElementById("options")

var subjectCount = 0;

window.onload = function () {
    if (subjectCount === subjects.length) {
        console.log('lekker man')
    } else {
        console.log('niet zo lekker man')
    }
}

document.getElementById("start-button").addEventListener("click", startQuestions)

document.getElementById("eens").addEventListener("click", function () {
    console.log('eens');
    startQuestions();
});

document.getElementById("none").addEventListener("click", function () {
    console.log('none');
});

document.getElementById("oneens").addEventListener("click", function () {
    console.log('oneens');
});

function startQuestions () 
{
    showOptions.style.display = "block"
    title.innerHTML = subjectCount + 1 + ". " + subjects[subjectCount].title
    questionDescription.innerHTML = subjects[subjectCount].statement
    hideIntro.style.display = "none"
    subjectCount++
}