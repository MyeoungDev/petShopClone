var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 4,
    spaceBetween: -20,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

var swiper2 = new Swiper('.swiper2', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// var swiper = new Swiper ('.swiper3', {
//     slidesPerView: 4,
//     slidesPerColumn: 2,
//     spaceBetween: 30,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//     },
// });

var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    slidesPerGroup: 3,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: '.menu__bar',
      type: 'custom',
      clickable: true,
    },
  });