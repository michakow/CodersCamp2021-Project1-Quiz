import { getQuestions } from './getData.js';


export const addStartClickHandler = () => {
    const startButton = document.getElementsByClassName('game__button--start-quiz')[0];
    startButton.addEventListener("click", () => getQuestions(12), false);
}    