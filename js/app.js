let title = document.getElementById("title");
let questionDescription = document.getElementById("question-description");
let hideIntro = document.getElementById("hide-onclick");

document.getElementById("start-button").addEventListener("click", startQuestions);
document.getElementById("eens").addEventListener("click", eens);
document.getElementById("none").addEventListener("click", none);
document.getElementById("oneens").addEventListener("click", onEens);

function startQuestions () 
{
    title.innerHTML = subjects[0].title;
    questionDescription.innerHTML = subjects[0].statement;
    hideIntro.style.display = 
}

function none () 
{
    console.log('none')
}

function eens () 
{
    console.log('eens');
}

function onEens () 
{
    console.log('oneens');
}