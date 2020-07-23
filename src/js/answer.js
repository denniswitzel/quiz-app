import { getAll } from './util'

export function initAnswer() {
const questionBox = getAll('.question-box')
questionBox.forEach(toggleLogic)

function toggleLogic (answer) {
    const button = answer.querySelector('.button-answer')
    const answerText = answer.querySelector('.question-box__answer')
    button.addEventListener('click', () => {
        answerText.classList.toggle('question-box__hidden')
        button.textContent = button.textContent === 'Show answer' ? 'Hide answer' : 'Show answer'
    })    
  }
}