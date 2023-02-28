const container = document.getElementById("root");

const template = `
<div>
  <div class='navi'>
    <p>asd</p>
  </div>
  <div class="top-title">
    <span>title</span>
    <div class='top-menu'>
      <button>Write</button>
      <button>Modify</button>
      <button>Sort</button>
    </div>
  </div>
  <div class='description'>
    <div class='description-view'>
      <image class='image'></image>
      <p>title</p>
      <p>des</p>
    </div>
  </div>
</div>
`;

container.innerHTML = template;
