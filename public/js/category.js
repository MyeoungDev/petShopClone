const menu = ['사료', '간식', '용품'];

let swiper3 = new Swiper('.swiper3', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: -10,
    slidesPerGroup: 4,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
  });
