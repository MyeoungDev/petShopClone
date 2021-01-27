const notice = document.querySelectorAll('.noticeSlider__text');
let sliderIndex = 1;
const milliseconds = 2000;

function noticeSliderFunc () {
    if(sliderIndex ==  notice.length){
        sliderIndex = 1;
    } else if(sliderIndex < 0){
        sliderIndex = notice.length;
    } else{
        sliderIndex ++;
    }
    for(i = 0; i < notice.length; i ++){
        notice[i].style.display = "none";
        notice[i].classList.remove("active");
    }
    notice[sliderIndex -1].style.display = "block";
    notice[sliderIndex -1].classList.add("active");
}


noticeSliderFunc();

setInterval(noticeSliderFunc, milliseconds);




// for문으로 active 클래스를 모두 지워준 후