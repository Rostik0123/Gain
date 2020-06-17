var headerText = `<div>
<div class="block-menu">
  <a href="index.html">
    <img src="/Gain-main/img/logo.png" alt="Gain" class="logo">
  </a>
  <a class="home text-menu" href="/Gain-main/index.html">Главная</a>
  <a class="kosmos text-menu" href="/Gain-main/kosmos-news.html">Новости космоса</a>
  <a class="earth text-menu" href="/Gain-main/Earth-news.html">Новости Земли</a>
  <a class="project text-menu" href="/Gain-main/project-news.html">Новости редакции</a>
  <div class="dropdown">
    <a onclick="myFunction()" class="dropbtn">☰</a>
    <div id="myDropdown" class="dropdown-content">
      <a href="/Gain-main/support.html" class="support">Поддержка</a>
      <a href="#" class="about">О нас</a>
    </div>
  </div>
</div>
<span></span>
</div>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('beforeend', header );
}

setHeader();
