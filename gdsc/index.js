const span= document.querySelector(".span");
const img = document.querySelector(".img-ctn");
const arrow = document.querySelector(".arrow1");
const btn = document.querySelector(".joinbtn");
const sec = document.querySelector(".section");
const text = document.querySelector(".welcome");
const imgctn = document.querySelector(".ctn");
const slide = document.querySelectorAll(".circle");
const logo = document.querySelector(".logo");
if (screen.width < 800){
  var typingEffect = new Typed('.text', {
    strings: ["WELCOME TO OUR CLUB"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});
} else {
  var typingEffect = new Typed('.text', {
    strings: ["WELCOME TO OUR CLUB !!"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});
}
if (screen.width > 350) {
setTimeout(()=>{
span.classList.remove("hide");
},3000);
setTimeout(()=>{
    arrow.classList.remove("hide");
    arrow.classList.add("arrow");
    setTimeout(()=>{
        
        
            arrow.classList.remove("arrow");
            btn.classList.remove("hide");
            
            
    },1000)
    },4000);

    setTimeout(()=>{
     img.classList.add("hide");
     if (screen.width > 900){
        text.style.fontSize="45px"
    } else {
        text.style.fontSize="30px" 
    }
     imgctn.classList.remove("hide");
     logo.classList.remove("hide");
    },6000);
  } else {
    setTimeout(()=>{
      span.classList.remove("hide");
      },3000);
      setTimeout(()=>{
          arrow.classList.remove("hide");
          arrow.classList.add("arrow");
          setTimeout(()=>{
              
              
                  arrow.classList.remove("arrow");
                  btn.classList.remove("hide");
                  
                  
          },1000)
          },4000);

  }
      // Javascript for image slider autoplay navigation
    var repeat = function(){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slide[i].classList.add('active');
        i++;

        if(slide.length == i){
          i = 0;
        }
        if(i >= slide.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();
    
    