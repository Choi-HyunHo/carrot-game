const playBtn = document.querySelector('.game-btn')
const timer = document.querySelector('.time')
const counter = document.querySelector('.counter')
const modal = document.querySelector('.modal')
const modalText = document.querySelector('.modal-text')
const field = document.querySelector('.game-field')
const fieldRect = field.getBoundingClientRect()
const replayBtn = document.querySelector('.replay-btn')

const CARROT_COUNT = 6
const BUG_COUNT = 6
const CARROT_SIZE = 80

const playIcon = document.querySelector('.play-icon')
let started = false // 게임의 상태를 기억하는 변수
let interval

playBtn.addEventListener('click', () => {
  if (started) {
    stopGame()
  } else {
    startGame()
  }
  console.log(started)
})

replayBtn.addEventListener('click', () => {
  startGame()
  modal.classList.add('hidden')
  playBtn.classList.remove('state')
  score = 0
})

function startGame() {
  started = true
  showTimerScore()
  startTimer()
  onField()
}

function stopGame() {
  started = false
  stopTimer()
  playBtn.classList.add('state')
  score = 0
}

function showTimerScore() {
  playIcon.setAttribute('class', 'fas fa-stop')
  timer.classList.remove('state')
  counter.classList.remove('state')
}

// 타이머
function startTimer() {
  let second = 5
  updateTime(second)
  interval = setInterval(() => {
    if (second <= 0) {
      clearInterval(interval)
      modal.classList.remove('hidden')
      playBtn.classList.add('state')
      return
    }
    updateTime(--second)
  }, 1000)
}

function updateTime(sec) {
  const minutes = 0
  const seconds = sec
  timer.textContent = `${minutes} : ${seconds} `
  if (seconds === 0) {
    modalText.textContent = 'you lose 😭'
  }
}

function stopTimer() {
  clearInterval(interval)
  modal.classList.remove('hidden')
  modalText.textContent = 'replay ❓'
}

// 아이템 필드 위에 배치하기
function onField() {
  field.innerHTML = ''
  addItem('carrot', CARROT_COUNT, 'img/carrot.png')
  addItem('bug', BUG_COUNT, 'img/bug.png')
  counter.textContent = CARROT_COUNT
}

function addItem(name, count, imgPath) {
  const x1 = 0 // 사각형의 시작점 (좌측 상단)
  const y1 = 0
  const x2 = fieldRect.width - CARROT_SIZE // 사각형 우측 하단.
  //빼는 이유 - 아이템의 x,y 기준으로 포지션이 지정되기 때문에
  const y2 = fieldRect.height - CARROT_SIZE
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img')
    item.setAttribute('class', name)
    item.setAttribute('src', imgPath)
    item.style.position = 'absolute'
    const horizontal = randomField(x1, x2)
    const vertical = randomField(y1, y2)
    item.style.transform = `translate(${horizontal}px, ${vertical}px)`
    field.append(item)
  }
}

function randomField(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// carrot 지우기
let score = 0
field.addEventListener('click', (event) => {
  if (event.target.className === 'carrot') {
    event.target.remove()
    score++
    gameScore(score)
  } else if (event.target.className === 'bug') {
    stopGame()
    modalText.textContent = 'you lose 😭'
  }
})

function gameScore(point) {
  counter.textContent = CARROT_COUNT - point
  if (CARROT_COUNT === point) {
    stopGame()
    modalText.textContent = 'You won 🎉'
  }
}
