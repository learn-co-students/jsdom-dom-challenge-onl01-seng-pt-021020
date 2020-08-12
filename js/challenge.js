window.addEventListener('DOMContentLoaded', () => {
  let counterInterval = window.setInterval(incrementCounter, 1000)
  let counting = true
  const counter = document.querySelector('h1#counter')
  const minus = document.querySelector('button#minus')
  const plus = document.querySelector('button#plus')
  const heart = document.querySelector('button#heart')
  const pause = document.querySelector('button#pause')
  const submit = document.querySelector('button#submit')

  minus.addEventListener('click', decrementCounter)
  plus.addEventListener('click', incrementCounter)
  heart.addEventListener('click', likeNumber)
  pause.addEventListener('click', pauseCounter)
  submit.addEventListener('click', submitComment)

  function incrementCounter() {
    let count = parseInt(counter.textContent)

    count++

    counter.textContent = count
  }

  function decrementCounter() {
    let count = parseInt(counter.textContent)

    count--

    counter.textContent = count
  }

  function likeNumber() {
    const likes = document.querySelector('ul.likes')
    const count = parseInt(counter.textContent)
    let countLikes = document.querySelector(`li#like-${count}`)
    if (countLikes) {
      const countLikesValueSpan = countLikes.querySelector('span#likes-count')
      let countLikesValueInt = parseInt(countLikesValueSpan.textContent)
      countLikesValueInt++
      countLikesValueSpan.innerText = countLikesValueInt
    } else {
      countLikes = document.createElement('li')
      countLikes.id = `like-${count}`
      countLikes.innerHTML = `${count} : <span id="likes-count">1</span>`
      likes.appendChild(countLikes)
    }
  }

  function pauseCounter() {
    counting = ! counting

    if (counting) {
      counterInterval = window.setInterval(incrementCounter, 1000)

      document.querySelectorAll('button').forEach(function(button) {
        button.disabled = false
      })

      pause.innerText = 'pause'
    } else {
      clearInterval(counterInterval)

      document.querySelectorAll('button').forEach(function(button) {
        button.disabled = true
      })

      pause.disabled = false
      pause.innerText = 'resume'
    }
  }

  function submitComment(event) {
    event.preventDefault()

    const comment = document.querySelector('input#comment-input')

    if (comment.value != '') {
      const comments = document.querySelector('div.comments')
      p = document.createElement('p')
      p.innerText = comment.value

      comments.appendChild(p)

      comment.value = ''
    }
  }
})