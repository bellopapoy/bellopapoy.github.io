$(function(){

const elements = document.querySelectorAll('[data-chaffle]');
Array.prototype.forEach.call(elements, function (el) {
  const chaffle = new Chaffle(el, {
  	lang: "en",
  	speed: 60,
  	delay: 80
  });
  el.addEventListener('load', function () {
    chaffle.init();
  });
});

});

