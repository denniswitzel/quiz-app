import { getAll } from './util'

getAll()

export function initBookmark () {
    const bookmark = getAll('.question-bookmark')
    bookmark.forEach(toggleActive)

    function toggleActive (element) {
        element.addEventListener('click', () => element.classList.toggle('active'))
    }
}