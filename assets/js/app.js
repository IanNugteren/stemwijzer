const title = document.getElementById("title");
const questionDescription = document.getElementById("question-description");
const hideIntro = document.getElementById("hide-onclick");
const showOptions = document.getElementById("options");
const answerButtons = document.getElementsByClassName('answer-buttons');
let subjectCount = 0;

document.getElementById("start-button").addEventListener("click", loadQuestions);

for(let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].onclick = function () {
        const answer = answerButtons[i].dataset.answer;
        switch (answer) {
            case 'pro':
                subjects[subjectCount - 1].answer = 'pro';
                break;
            case 'ambivalent':
                subjects[subjectCount - 1].answer = 'ambivalent';
                break;
            case 'contra':
                subjects[subjectCount - 1].answer = 'contra';
                break;
            case 'skip':
                delete subjects[subjectCount - 1].answer;
                break;
            default: 
                console.log('je moeder is dik');
                break; 
        } 
        loadQuestions();
    };
}

function loadQuestions () 
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
        subjectCount++;
    }
}


