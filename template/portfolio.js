const container = document.getElementById("root");

const template = 
`
<div>
  <div class='navi'>
    <div class="github-icon">
      <a href="https://github.com/7220">
      <img src="./images/github-icon.png" alt="Github">
      </a>
    </div>
    <div class="navi-menu">
      <span class="material-symbols-outlined">
        menu
      </span>
    </div>
  </div>
  <div class="main-description">
    <div class="self-introduce">
      자기소개
      - 저는 사용자 친화적인 프로그래밍을 목표로 하는 신입 프론트엔드 개발자 김상규입니다.
      - 
    </div>
    <div class="skill">
      보유기술
      - 프론트엔드 기술
      - html/css
      - SCSS
      - BootStrap
      - Twintail
      - JavaScript
      - TypeScript
      - jquery
      - React
      - Redux
      - Next
      - MobX
      



      - 백엔드 기술
      - node.js
      - 
    </div>
    <div class="portfolio">
      포트폴리오
      - 포폴제목
      - 포폴 만들때 쓴 기술
      - 설명
    </div>
  </div>
</div>

`

// container.innerHTML = template