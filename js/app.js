const playBtn = document.querySelector('.game-btn')
const timer = document.querySelector('.time')
const modal = document.querySelector('.modal')

const playIcon = document.querySelector('.play-icon')

// 시작 버튼을 누르면 타이머가 동작 (10초)
let second = 10

function gamePlay() {
  playIcon.setAttribute('class', 'fas fa-stop')

  let interval = setInterval(function () {
    timer.innerHTML = `${second}`
    second--
    if (second === -1) {
      clearInterval(interval)
      modal.classList.remove('hidden')
    }
  }, 1000)
}

playBtn.addEventListener('click', gamePlay)
