const playBtn = document.querySelector('.game-btn')
const timer = document.querySelector('.time')
const counter = document.querySelector('.counter')
const modal = document.querySelector('.modal')
const modalText = document.querySelector('.modal-text')
const field = document.querySelector('.game-field')
const fieldRect = field.getBoundingClientRect()

const CARROT_COUNT = 6
const BUG_COUNT = 6
const CARROT_SIZE = 80

const playIcon = document.querySelector('.play-icon')
let started = false // 게임의 상태를 기억하는 변수
let second = 6
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
  showTimerScore()
  startTimer()
  gameScore()
  onField()
}

function stopGame() {
  stopTimer()
  removePlayBtn()
}

function showTimerScore() {
  playIcon.setAttribute('class', 'fas fa-stop')
  timer.classList.remove('state')
  counter.classList.remove('state')
}

function removePlayBtn() {
  // 강제 종료 또는 게임이 끝났을 경우 사용
  playBtn.classList.add('state')
  modalReplay()
}

function modalReplay() {
  modalText.textContent = 'replay ?'
}

function gameScore() {
  counter.textContent = CARROT_COUNT
}

// 타이머
function startTimer() {
  interval = setInterval(function () {
    timer.innerHTML = `${second}`
    second--

    if (second === -1) {
      clearInterval(interval)
      modal.classList.remove('hidden')
      playBtn.classList.add('state')
      return
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(interval)
  modal.classList.remove('hidden')
}

// 아이템 필드 위에 배치하기
function onField() {
  field.innerHTML = ''
  addItem('carrot', CARROT_COUNT, 'img/carrot.png')
  addItem('bug', BUG_COUNT, 'img/bug.png')
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
