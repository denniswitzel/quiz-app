// Main Content
const mainQuestion = get('.question')
const mainBookmark = get('.bookmark')
const mainCreate = get('.create')
const mainProfile = get('.profile')

// Navigation
const navFirst = get('.nav__link-1')
const navSecond = get('.nav__link-2')
const navThird = get('.nav__link-3')
const navFourth = get('.nav__link-4')

// SVG Navigation
const svgQuestions = get('.svg-questions')
const svgBookmark = get('.svg-bookmark')
const svgCreate = get('.svg-create')
const svgProfile = get('.svg-profile')

// Headline
const headline = get('h1')

// Bookmark
const bookmark1 = get('.question-box__bookmark--unmarked1')
const bookmark2 = get('.question-box__bookmark--unmarked2')
const bookmark3 = get('.question-box__bookmark--unmarked3')
const bookmark4 = get('.question-box__bookmark--unmarked4')
const bookmark5 = get('.question-box__bookmark--marked5')
const bookmark6 = get('.question-box__bookmark--marked6')

// Show Answer
const answerQuestion1 = get('.answer')
const answerQuestion2 = get('.answer2')
const answerQuestion3 = get('.answer3')
const answerQuestion4 = get('.answer4')
const answerQuestion5 = get('.answer5')
const answerQuestion6 = get('.answer6')
const buttonAnswer1 = get('.button-answer1')
const buttonAnswer2 = get('.button-answer2')
const buttonAnswer3 = get('.button-answer3')
const buttonAnswer4 = get('.button-answer4')
const buttonAnswer5 = get('.button-answer5')
const buttonAnswer6 = get('.button-answer6')

// Form
const buttonSubmit = get('.button-submit')
const input1 = get('[name=question]')
const input2 = get('[name=answer]')
const input3 = get('[name=tags]')

// Dark Mode
const body = get('body')
const header = get('header')
const footer = get('footer')
const darkMode = get('.dark-mode')

darkMode.addEventListener('click', () => {
    body.classList.toggle('body-light')
    header.classList.toggle('background-blue')
    footer.classList.toggle('background-blue')
    mainProfile.classList.toggle('profile-light')
})

// Show Answer Function
buttonAnswer1.addEventListener('click', answerToggle(buttonAnswer1, answerQuestion1))
buttonAnswer2.addEventListener('click', answerToggle(buttonAnswer2, answerQuestion2))
buttonAnswer3.addEventListener('click', answerToggle(buttonAnswer3, answerQuestion3))
buttonAnswer4.addEventListener('click', answerToggle(buttonAnswer4, answerQuestion4))
buttonAnswer5.addEventListener('click', answerToggle(buttonAnswer5, answerQuestion5))
buttonAnswer6.addEventListener('click', answerToggle(buttonAnswer6, answerQuestion6))

function answerToggle(button, answer) {
    return () => {
    answer.classList.toggle('question-box__answer')
    if(button.textContent === 'Show answer') {
        button.textContent = 'Hide answer'
    } else {
        button.textContent = 'Show answer'
    }
    return(button, answer)
    }
}

// Navigation Arrow Functions
navFirst.addEventListener('click', () => {
    mainQuestion.classList.remove('hidden')
    mainBookmark.classList.add('hidden')
    mainCreate.classList.add('hidden')
    mainProfile.classList.add('hidden')
    headline.innerHTML = '<span class="header__headline--gradient">CSS:</span> { Quiz }'
    svgQuestions.classList.add('svg-fill')
    svgBookmark.classList.remove('svg-fill')
    svgCreate.classList.remove('svg-fill')
    svgProfile.classList.remove('svg-fill')
})

navSecond.addEventListener('click', () => {
    mainQuestion.classList.add('hidden')
    mainBookmark.classList.remove('hidden')
    mainCreate.classList.add('hidden')
    mainProfile.classList.add('hidden')
    headline.textContent = 'Bookmarks'
    svgQuestions.classList.remove('svg-fill')
    svgBookmark.classList.add('svg-fill')
    svgCreate.classList.remove('svg-fill')
    svgProfile.classList.remove('svg-fill')
})

navThird.addEventListener('click', () => {
    mainQuestion.classList.add('hidden')
    mainBookmark.classList.add('hidden')
    mainCreate.classList.remove('hidden')
    mainProfile.classList.add('hidden')
    headline.textContent = 'Create'
    svgQuestions.classList.remove('svg-fill')
    svgBookmark.classList.remove('svg-fill')
    svgCreate.classList.add('svg-fill')
    svgProfile.classList.remove('svg-fill')
})

navFourth.addEventListener('click', () => {
    mainQuestion.classList.add('hidden')
    mainBookmark.classList.add('hidden')
    mainCreate.classList.add('hidden')
    mainProfile.classList.remove('hidden')
    headline.textContent = 'Profile'
    svgQuestions.classList.remove('svg-fill')
    svgBookmark.classList.remove('svg-fill')
    svgCreate.classList.remove('svg-fill')
    svgProfile.classList.add('svg-fill')
})

// Bookmark Functions

bookmark1.addEventListener('click', bookmarkToggle(bookmark1, 'question-box__bookmark--unmarked1', 'question-box__bookmark--marked1'))
bookmark2.addEventListener('click', bookmarkToggle(bookmark2, 'question-box__bookmark--unmarked2', 'question-box__bookmark--marked2'))
bookmark3.addEventListener('click', bookmarkToggle(bookmark3, 'question-box__bookmark--unmarked3', 'question-box__bookmark--marked3'))
bookmark4.addEventListener('click', bookmarkToggle(bookmark4, 'question-box__bookmark--unmarked4', 'question-box__bookmark--marked4'))
bookmark5.addEventListener('click', bookmarkToggle(bookmark5, 'question-box__bookmark--unmarked5', 'question-box__bookmark--marked5'))
bookmark6.addEventListener('click', bookmarkToggle(bookmark6, 'question-box__bookmark--unmarked6', 'question-box__bookmark--marked6'))

function bookmarkToggle (bookmark, classname1, classname2) {
    return () => {
    bookmark.classList.toggle(classname1)
    bookmark.classList.toggle(classname2)
    }
}
 // Form Reset & PreventDefault
buttonSubmit.addEventListener('click', function(event) {
    event.preventDefault()
    input1.value = ''
    input2.value = ''
    input3.value = ''
})

// Query Selector
function get(selector) {
    return document.querySelector(selector)
  }