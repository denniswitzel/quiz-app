import { get, getAll } from './util'

//Comment

export const cardList = [{
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    isBookmarked: false,
    tags: ['HTML', 'CSS']
},
{
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    isBookmarked: false,
    tags: ['HTML', 'CSS', 'React']
},
{
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    isBookmarked: false,
    tags: ['HTML', 'CSS', 'javaScript', 'React']
},
{
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    isBookmarked: false,
    tags: ['HTML', 'CSS', 'javaScript']
},
{
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
    isBookmarked: false,
    tags: ['HTML', 'javaScript', 'React']
}]

export function initCardsQuestion() {
    const target = get('[data-name=question]')
    target.innerHTML = ''
    cardList.forEach(buildingCard)

function buildingCard(card){
        const newCard = document.createElement('section')
        newCard.className = 'question-box'
        newCard.innerHTML = /*html*/ `<svg data-js="bookmark" class="question-bookmark" x="0px" y="0px" width="80.8px" height="107.8px" viewBox="0 0 80.8 107.8" enable-background="new 0 0 80.8 107.8" xml:space="preserve">
        <polygon points="0,26.3 80.8,26.3 80.8,0 14.5,0 "/>
        <polygon  points="80.8,107.8 47.6,92.2 14.5,107.8 14.5,0 80.8,0 "/>
        <polygon points="47.7,37.1 53.1,48.2 65.3,49.9 56.5,58.5 58.6,70.6 47.7,64.9 36.8,70.6 38.9,58.5 30.1,49.9 42.2,48.2 "/></svg>
        <h2 class="question-box__headline mb-10">Question:</h2>
        <p class="question-box__text ff-roboto">${card.question}</p>
        <button class="button-answer">Show answer</button>
        <div class="question-box__answer question-box__hidden">
            <h2 class="question-box__headline mb-10">Answer:</h2>
            <p class="question-box__text ff-roboto">${card.answer}</p>
        </div>`
        target.appendChild(newCard)


        const ulList = document.createElement('ul')
        ulList.classList.add('question-box__tags', 'ff-roboto')
        card.tags.forEach((tag) => {
            const li = document.createElement('li')
            li.textContent = tag
            ulList.appendChild(li)
        })

        newCard.appendChild(ulList)
        
        toggleLogic(newCard)
        activeBookmark(newCard) 
        
    }
}
    
function activeBookmark (card) {
    const bookmarks = card.querySelector('[data-js=bookmark]')
    bookmarks.addEventListener('click', () => {
        bookmarks.classList.toggle('active')
        const isBookmarked = cardList.map(obj => obj.isBookmarked === false ? { ...obj, isBookmarked: true } : obj)
        console.log(isBookmarked)
    })  
}

function toggleLogic (card) {
    const button = card.querySelector('.button-answer')
    const answerText = card.querySelector('.question-box__answer')
            
    button?.addEventListener('click', () => {
    answerText.classList.toggle('question-box__hidden')
    button.textContent = button.textContent === 'Show answer' ? 'Hide answer' : 'Show answer'
})    

}

    
