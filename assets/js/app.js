var eens = []
var oneens = []
var none = []

const title = document.getElementById("title")
const questionDescription = document.getElementById("question-description")
const hideIntro = document.getElementById("hide-onclick")
const showOptions = document.getElementById("options")
var subjectCount = 0;

document.getElementById("start-button").addEventListener("click", startQuestions)
document.getElementById("eens").addEventListener("click", eens)
document.getElementById("none").addEventListener("click", none)
document.getElementById("oneens").addEventListener("click", onEens)

function startQuestions () 
{
    showOptions.style.display = "block"
    title.innerHTML = subjects[subjectCount].title
    questionDescription.innerHTML = subjects[subjectCount].statement
    hideIntro.style.display = "none"
}

function none () 
{
    console.log('none')
}

function eens () 
{

}

function onEens () 
{
    console.log('oneens');
}