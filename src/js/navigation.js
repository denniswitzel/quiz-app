import { get, getAll } from './util'

export function initNavigation() {
  // Headline
  const headline = get('h1')

  // Pages
  const questionPage = get('.question')
  const bookmarkPage = get('.bookmark')
  const createPage = get('.create')
  const profilePage = get('.profile')

  // Navigation
  const navList = getAll('.nav__link')
  const svgList = getAll('.nav-svg')
  svgList.forEach(svgFill)
  navList[0].addEventListener('click', changePage(questionPage, '<span class="header__headline--gradient">CSS:</span> { Quiz }'))
  navList[1].addEventListener('click', changePage(bookmarkPage, 'Bookmarks'))
  navList[2].addEventListener('click', changePage(createPage, 'Create'))
  navList[3].addEventListener('click', changePage(profilePage, 'Profile'))

  // Show and Hide Pages  
  function changePage(namePage, title) {
    return () => {
      hiddenPages()
      namePage.classList.remove('hidden')
      headline.innerHTML = title
    }
  }

  function hiddenPages() {
    questionPage.classList.add('hidden')
    bookmarkPage.classList.add('hidden')
    createPage.classList.add('hidden')
    profilePage.classList.add('hidden')
  }

  // Navigation Icon Fill Change  
  function svgFill (element) {
    element.addEventListener('click', () => {
      element.classList.remove('fill-orange')  
      element.classList.add('fill-orange')   
    })
  }
}