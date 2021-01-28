var swiper = new Swiper('.bestItemMenu', {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
  });


  // 클릭에이블 true로 현재 인덱스를 값을 갖고 오고 그 현재 인덱스 값에 이벤트로 클래스값을 추가해주고 line Div 를 dispaly block 시켜줘서
  // border을 보이기 해준다? 그리고 그 index값에 맞는 아래 Item목록들을 보여주게 한다?




// const slide = document.querySelectorAll('.bestItemMenu .swiper-slide')


// slide.addEventListener("touchstart", touch_start);
// slide.addEventListener("touchend", touch_end);

// let change_x_axis = null;

// function touch_start(e){
//     change_x_axis = e["touches"][0]["screenX"]
// }

// function touch_end(e){

//     if (change_x_axis - e["changedTouches"][0]["screenX"] > 0){
//         console.log("left swipe")
//     }else{
//         console.log("right swipe")
//     }
// }