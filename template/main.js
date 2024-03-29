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
  <div class="background">
    <div class="top-title">
      <span>title</span>
      <div class='top-menu'>
        <button>Write</button>
        <button>Modify</button>
        <button>Sort</button>
      </div>
    </div>
    <div class='description'>
      <a href='#' class='description-view'>
        <image class='image'></image>
        <div class="des-main">
          <p class="des-title">title</p>
          <p class="time-ago">date</p>
        </div>
      </a>
    </div>
  </div>
</div>
`;

// container.innerHTML = template;
