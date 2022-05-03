# Carrot Game

URL : https://choi-hyunho.github.io/carrot-game/

<br>

## 🌟 Carrot Game 소개

- Vanila JavaScript 만을 사용하여 만들었습니다.
- Javascript의 기본적인 함수 및 이벤트 사용에 중점을 두고, 기능 구현을 목적으로 접근 했습니다.

<br>

## 💄 Carrot Game 게임 화면

<img align="left" src="https://user-images.githubusercontent.com/87301268/166413304-b3e9c648-3436-4c50-9832-a69261b495a4.jpg" width="400" >
<img align="left" src="https://user-images.githubusercontent.com/87301268/166413307-3bb15dfa-f8eb-487f-b504-d3a33dc67a80.jpg" width="400" >
<img align="left" src="https://user-images.githubusercontent.com/87301268/166413311-e3c87716-eb20-47e9-a75a-e260997d8c53.jpg" width="400" >
<img align="right" src="https://user-images.githubusercontent.com/87301268/166413313-58c77246-a992-4520-8074-9c131406502c.jpg" width="400" >

<br>

## 💻 개발 환경 및 기술

- Visual Studio Code
- HTML
- CSS ( SCSS )
- JavaScript

<br>

## ✨ 기능

- play 버튼을 누르면 타이머 작동 및 게임 시작
- 게임 진행 중 play 버튼을 누르면 게임 중단 및 replay 버튼 띄우기
- 게임 시작할 때 마다 배경 위에 벌레와 당근이 무작위 배치
- 벌레을 클릭하면 사용자 패배
- 당근을 클릭하면 당근의 갯수가 차감되는게 눈으로 확인 가능
- 상황에 맞게 modal 창에 text로 사용자에게 전달하기
- 배경음 및 버튼을 누를 때 나오는 효과음 추가

<br>

## 🚧 문제점

- 게임을 시작하고 중지 버튼을 누르면 버튼이 바로 숨겨지지 않고 delay가 걸리는 현상
- 코드 퀄리티보다 기능 구현에 중점을 초점을 맞춰 진행
  - 이로 인해 지저분하고 불필요한 코드가 많이 나옴. 코드 리팩토링이 필요

<br>

## 🔥 어려웠던 부분 & 느낀 점

### 이미지 경로 지정 문제

- 배경 이미지를 지정하는데 화면에 나타나지 않았습니다.<br>문제점을 찾아보다가 경로 지정이 문제라는 것을 알게 되었습니다.
- [이번 기회를 통해 경로에 대해 공부 하였습니다.](https://velog.io/@hoho_0815/background-img-%EA%B2%BD%EB%A1%9C)

<br>

### 이벤트 위임

- 필드 위의 당근과 벌레가 각각 다른 기능을 해야 합니다.
- 하지만 일일이 요소에게 이벤트를 부여하게 되면, 동적인 요소를 처리하기 위한 효율이 좋지 않습니다.<br> 그래서 아이템의 부모인 필드에게 이벤트 위임을 하였습니다.
- 이벤트 위임을 이론이 아닌 직접 사용할 수 있었고, 개발자로서 효율적이게 코드를 작성하는 것이 <br> 가독성 및 작업 속도에 큰 영향을 줄 수 있다 라고 느끼게 되었습니다.

