let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let btnMenuMob = document.querySelector('[btn-menu-mob]');
let menuLinks = document.querySelectorAll('.item-h__link');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  btnMenuMob.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    btnMenuMob.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var cubes = document.querySelector('.cubes');
  var speed = 10; // Швидкість анімації в секундах

  cubes.style.animationDuration = speed + 's';
});
