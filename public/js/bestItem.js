var swiper = new Swiper('.bestItemMenu', {
    slidesPerView: 4,
    spaceBetween: -10,
    freeMode: true,
  });


  // 클릭에이블 true로 현재 인덱스를 값을 갖고 오고 그 현재 인덱스 값에 이벤트로 클래스값을 추가해주고 line Div 를 dispaly block 시켜줘서
  // border을 보이기 해준다? 그리고 그 index값에 맞는 아래 Item목록들을 보여주게 한다?

// const bestItem = Array.from(document.querySelectorAll('.bestItemMenu .swiper-slide'));

// bestItem.forEach(els => addEventListener('click', function(){
//   // for(i=0; i<bestItem.length; i++){
//   //   els.classList.remove('click');
//   // }
//   els.classList.add('click');
// }));
  

// let test = document.getElementsByClassName('banner').addEventListener('click', bannerTest());

// for(i = 0; i < bestItem.length; i ++){
//   bestItem[i].addEventListener('click', CategoryClickEvent(i));
// }

// 여기 for문을 고쳐야 될꺼같음. 어떻게하면 각 element에 event를 추가해줄수있을까?

// function bannerTest(){
//   console.log('test');
// }

// let idx = 0;

function CategoryClickEvent(argument){
  for(i = 0; i < bestItem.length; i ++){
    bestItem[i].classList.remove('click');
  }
  bestItem[argument].classList.add('click');
}

// HTML 태그 안에 onclick Event로 넣어줘서 아래 Product는 display로 조절!
// 순수 script코드로는 나중에 만들어 보자.
// 공부에 많은 도움이 될 것 같음.


console.log(bestItem); // 19개





// swiper 를 쓰는데 active를 무시하고 그냥 addEVenetListener로 click 이벤트를 slide에 줘서 
// event 발생 시 font color, border , 아래 product 나타나게끔?