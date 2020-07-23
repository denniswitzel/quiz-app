import { get } from './util'
get()

export function initDarkmode (){
const body = get('body')
const header = get('header')
const footer = get('footer')
const darkMode = get('.dark-mode')
const profilePage = get('.profile')

darkMode.addEventListener('click', () => {
    body.classList.toggle('body-light')
    header.classList.toggle('background-blue')
    footer.classList.toggle('background-blue')
    profilePage.classList.toggle('profile-light')
})
}
