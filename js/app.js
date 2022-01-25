const playBtn = document.querySelector('.game-btn')
const timer = document.querySelector('.time')
const modal = document.querySelector('.modal')
const field = document.querySelector('.game-field')
const fieldRect = field.getBoundingClientRect()
console.log(fieldRect)

const playIcon = document.querySelector('.play-icon')
let started = false // 게임의 상태를 기억하는 변수
let second = 10
let interval

playBtn.addEventListener('click', () => {
  if (started) {
    stopGame()
  } else {
    startGame()
  }

  started = !started
  console.log(started)
})

function startGame() {
  startTimer()
  onField()
}

function stopGame() {
  stopTimer()
}

// 타이머
function startTimer() {
  playIcon.setAttribute('class', 'fas fa-stop')

  interval = setInterval(function () {
    timer.innerHTML = `${second}`
    second--

    if (second === -1) {
      clearInterval(interval)
      modal.classList.remove('hidden')
      playBtn.remove()
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(interval)
  modal.classList.remove('hidden')
  playBtn.remove()
}

// 아이템 필드 위에 배치하기
function onField() {
  addItem('carrot', 6, 'img / carrot.png')
  addItem('bug', 6, 'img / bug.png')
}

function addItem(name, count, imgPath) {
  const x = fieldRect.width
  const y = fieldRect.height
  for (i = 0; i <= count; i++) {
    const item = document.createElement('img')
    item.setAttribute('class', name)
    item.setAttribute('src', imgPath)
    item.style.transform = `translate(${x}px, ${y}px)`
    field.append('item')
  }
}
