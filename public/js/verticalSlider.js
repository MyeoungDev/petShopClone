const sliderBullet = ['01', '02', '03', '04'];



var swiper = new Swiper('.verticalSlider', {
    direction: 'vertical',
    // allowTouchMove: 'false',
    // noSwiping: 'false',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (sliderBullet[index]) + '</span>';
      },
    },
  });