import { get } from './util'
get()

export function initForm() {
const form = get('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  form.reset()
})
}
