import { getQuestions } from './getData.js';

const onClick = async () => {
    await getQuestions(12);
    setQuestionData(0);
}

export const addStartClickHandler = () => {
    const startButton = document.getElementsByClassName('game__button--start-quiz')[0];
    startButton.addEventListener("click", onClick, false);
}    

const setQuestionData = (id) => {
    const questions = JSON.parse(sessionStorage.getItem('questions'));
    const currentQuestion = questions[id];
    const questionsInner = document.getElementsByClassName('questions__inner')[0];
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    
    questionsInner.innerHTML = '<h3 class="questions__question">' + currentQuestion.question +'</h3>' +
      answers.map(answer => {
        return '<button class="button questions__answer">' + answer + '</button>' 
    }).join('');
}