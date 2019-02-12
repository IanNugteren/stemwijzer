var agreed = []
var unAgreed = []
var noChoice = []
const title = document.getElementById("title")
const questionDescription = document.getElementById("question-description")
const hideIntro = document.getElementById("hide-onclick")
const showOptions = document.getElementById("options")
var subjectCount = 0;

document.getElementById("start-button").addEventListener("click", startQuestions)

document.getElementById("eens").addEventListener("click", function () {
    console.log('eens');
    startQuestions();
});

document.getElementById("none").addEventListener("click", function () {
    console.log('none');
    startQuestions();
});

document.getElementById("oneens").addEventListener("click", function () {
    console.log('oneens');
    startQuestions();
});

document.getElementById("skip").addEventListener("click", function () {
    console.log('skipped');
    startQuestions();
});

function startQuestions () 
{
    if (subjectCount == subjects.length) {
        title.innerHTML = "Einde van de vragenlijst"
        hideIntro.style.display = "none"
        showOptions.style.display = "block"
        questionDescription.style.display = "none"
    
    } else {
        showOptions.style.display = "block"
        title.innerHTML = subjectCount + 1 + ". " + subjects[subjectCount].title
        questionDescription.innerHTML = subjects[subjectCount].statement
        hideIntro.style.display = "none"
        subjectCount++
    }
}