import { get } from './util'
import { cardList } from './cards'
//Comment
export function initForm() {
  const form = get('form')

  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const { question, answer, tags } = form
    cardList.push({
      question: question.value,
      answer: answer.value,
      tags: tags.value.split(',').map((tag) => tag.trim())
    })
    form.reset()
  })
}
