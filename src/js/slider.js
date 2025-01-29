document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    effect: "fade",
    fadeEffect: {
      crossFade: true, // Плавний перехід між слайдами
    },
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    simulateTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        const formattedIndex = (index + 1).toString().padStart(2, '0');
        return `
          <li class="${className}">
            ${formattedIndex}
          </li>`;
      },
    },
  });

  const calculateHeight = () => {
    const swiperSlideElements = Array.from(document.querySelectorAll('.swiper .swiper-slide'))
    if (!swiperSlideElements.length) return
    const width = swiperSlideElements[0].getBoundingClientRect().width
    const height = Math.round(width / (16 / 9))
    swiperSlideElements.forEach(element => element.style.height = `${height}px`)
  }

  calculateHeight();
  window.addEventListener('resize', calculateHeight);
});

/*           <svg width="5" height="25" class="reviews__svg">
<use href="./images/symbol-defs.svg#icon-dashes"></use>
</svg> */
