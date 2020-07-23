"use strict";

// Main Content
var mainQuestion = get('.question');
var mainBookmark = get('.bookmark');
var mainCreate = get('.create');
var mainProfile = get('.profile'); // Navigation

var navFirst = get('.nav__link-1');
var navSecond = get('.nav__link-2');
var navThird = get('.nav__link-3');
var navFourth = get('.nav__link-4'); // SVG Navigation

var svgQuestions = get('.svg-questions');
var svgBookmark = get('.svg-bookmark');
var svgCreate = get('.svg-create');
var svgProfile = get('.svg-profile'); // Headline

var headline = get('h1'); // Bookmark

var bookmark1 = get('.question-box__bookmark--unmarked1');
var bookmark2 = get('.question-box__bookmark--unmarked2');
var bookmark3 = get('.question-box__bookmark--unmarked3');
var bookmark4 = get('.question-box__bookmark--unmarked4');
var bookmark5 = get('.question-box__bookmark--marked5');
var bookmark6 = get('.question-box__bookmark--marked6'); // Show Answer

var answerQuestion1 = get('.answer');
var answerQuestion2 = get('.answer2');
var answerQuestion3 = get('.answer3');
var answerQuestion4 = get('.answer4');
var answerQuestion5 = get('.answer5');
var answerQuestion6 = get('.answer6');
var buttonAnswer1 = get('.button-answer1');
var buttonAnswer2 = get('.button-answer2');
var buttonAnswer3 = get('.button-answer3');
var buttonAnswer4 = get('.button-answer4');
var buttonAnswer5 = get('.button-answer5');
var buttonAnswer6 = get('.button-answer6'); // Form

var buttonSubmit = get('.button-submit');
var input1 = get('[name=question]');
var input2 = get('[name=answer]');
var input3 = get('[name=tags]'); // Dark Mode

var body = get('body');
var header = get('header');
var footer = get('footer');
var darkMode = get('.dark-mode');
darkMode.addEventListener('click', function () {
  body.classList.toggle('body-light');
  header.classList.toggle('background-blue');
  footer.classList.toggle('background-blue');
  mainProfile.classList.toggle('profile-light');
}); // Show Answer Function

buttonAnswer1.addEventListener('click', answerToggle(buttonAnswer1, answerQuestion1));
buttonAnswer2.addEventListener('click', answerToggle(buttonAnswer2, answerQuestion2));
buttonAnswer3.addEventListener('click', answerToggle(buttonAnswer3, answerQuestion3));
buttonAnswer4.addEventListener('click', answerToggle(buttonAnswer4, answerQuestion4));
buttonAnswer5.addEventListener('click', answerToggle(buttonAnswer5, answerQuestion5));
buttonAnswer6.addEventListener('click', answerToggle(buttonAnswer6, answerQuestion6));

function answerToggle(button, answer) {
  return function () {
    answer.classList.toggle('question-box__answer');

    if (button.textContent === 'Show answer') {
      button.textContent = 'Hide answer';
    } else {
      button.textContent = 'Show answer';
    }

    return button, answer;
  };
} // Navigation Arrow Functions


navFirst.addEventListener('click', function () {
  mainQuestion.classList.remove('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.add('hidden');
  headline.innerHTML = '<span class="header__headline--gradient">CSS:</span> { Quiz }';
  svgQuestions.classList.add('svg-fill');
  svgBookmark.classList.remove('svg-fill');
  svgCreate.classList.remove('svg-fill');
  svgProfile.classList.remove('svg-fill');
});
navSecond.addEventListener('click', function () {
  mainQuestion.classList.add('hidden');
  mainBookmark.classList.remove('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.add('hidden');
  headline.textContent = 'Bookmarks';
  svgQuestions.classList.remove('svg-fill');
  svgBookmark.classList.add('svg-fill');
  svgCreate.classList.remove('svg-fill');
  svgProfile.classList.remove('svg-fill');
});
navThird.addEventListener('click', function () {
  mainQuestion.classList.add('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.remove('hidden');
  mainProfile.classList.add('hidden');
  headline.textContent = 'Create';
  svgQuestions.classList.remove('svg-fill');
  svgBookmark.classList.remove('svg-fill');
  svgCreate.classList.add('svg-fill');
  svgProfile.classList.remove('svg-fill');
});
navFourth.addEventListener('click', function () {
  mainQuestion.classList.add('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.remove('hidden');
  headline.textContent = 'Profile';
  svgQuestions.classList.remove('svg-fill');
  svgBookmark.classList.remove('svg-fill');
  svgCreate.classList.remove('svg-fill');
  svgProfile.classList.add('svg-fill');
}); // Bookmark Functions

bookmark1.addEventListener('click', bookmarkToggle(bookmark1, 'question-box__bookmark--unmarked1', 'question-box__bookmark--marked1'));
bookmark2.addEventListener('click', bookmarkToggle(bookmark2, 'question-box__bookmark--unmarked2', 'question-box__bookmark--marked2'));
bookmark3.addEventListener('click', bookmarkToggle(bookmark3, 'question-box__bookmark--unmarked3', 'question-box__bookmark--marked3'));
bookmark4.addEventListener('click', bookmarkToggle(bookmark4, 'question-box__bookmark--unmarked4', 'question-box__bookmark--marked4'));
bookmark5.addEventListener('click', bookmarkToggle(bookmark5, 'question-box__bookmark--unmarked5', 'question-box__bookmark--marked5'));
bookmark6.addEventListener('click', bookmarkToggle(bookmark6, 'question-box__bookmark--unmarked6', 'question-box__bookmark--marked6'));

function bookmarkToggle(bookmark, classname1, classname2) {
  return function () {
    bookmark.classList.toggle(classname1);
    bookmark.classList.toggle(classname2);
  };
} // Form Reset & PreventDefault


buttonSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  input1.value = '';
  input2.value = '';
  input3.value = '';
}); // Query Selector

function get(selector) {
  return document.querySelector(selector);
}