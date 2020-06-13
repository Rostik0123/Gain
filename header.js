var headerText = `<div>
<div class="block-menu">
  <img src="img/logo.png" alt="Gain" class="logo" href="">
  <a class="home text-menu" href="">Главная</a>
  <a class="kosmos text-menu" href="">Новости космоса</a>
  <a class="earth text-menu" href="">Новости Земли</a>
  <a class="project text-menu" href="">Новости проекта</a>
</div>
<span></span>
</div>`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('beforeend', header );
}

setHeader();
