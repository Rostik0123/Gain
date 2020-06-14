var footerText = `<div>
<div class="block-footer"></div>
<a class="gain">© Gain, 2020</a>
<a class="suggestions">Пишите свои предложения по улучшению проекта нам на почту: gain.belarus@gmail.com </a>
<span></span>
</div>`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setFooter();
