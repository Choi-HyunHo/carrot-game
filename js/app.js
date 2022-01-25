const playBtn = document.querySelector('.game-btn')
const timer = document.querySelector('.time')
const modal = document.querySelector('.modal')

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
}

function stopGame() {
  stopTimer()
}

function startTimer() {
  playIcon.setAttribute('class', 'fas fa-stop')

  interval = setInterval(function () {
    timer.innerHTML = `${second}`
    second--

    if (second === -1) {
      clearInterval(interval)
      modal.classList.remove('hidden')
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(interval)
}
