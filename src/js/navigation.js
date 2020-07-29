import { get, getAll } from './util'
import { initCardsQuestion } from './cards'
//Comment
export function initNavigation() {
  const headline = get('[data-js=headline]')
  const page = getAll('[data-js=page]')
  const navList = getAll('[data-js=nav-icon]')
  
  navList.forEach((navIcon) => {
    navIcon.addEventListener('click', () => {
      const navTarget = navIcon.dataset.name
      headline.textContent = navIcon.dataset.headline

      if (navTarget === 'question') {
        initCardsQuestion()
      }

      page.forEach((page) => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', pageName !== navTarget)
      })
      navList.forEach((oneOfAllIcons) => {
        oneOfAllIcons.classList.toggle(
          'fill-orange',
          oneOfAllIcons === navIcon
        )
      })
    })
  })
}