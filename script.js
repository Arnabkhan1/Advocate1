// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//       smooth: true
//  });

const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 0,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});



// function firstPageAnimation(){
//     var tl = gsap.timeline();


//     tl.from(".nav",{
//         y:'-10',
//         opacity:0,
//         duration:1.5,
//         ease:Expo.easeInOut

//     }) 
//     .to(".boundingelem",{
//         y:0,
//         stagger:.1,
//         duration:2,
//         delay:-1,
//         ease:Expo.easeInOut,
//     }) 

//     from("#herofooter", {
//         y:-10,
//         opacity:0,
//         duration:1.5,
//         delay:-1,
//         ease: Expo.easeInOut
//     }) 
// }

// firstPageAnimation();



// document.querySelectorAll(".elem").forEach(function(elem) {
//     elem.addEventListener("mousemove", function(details) {


//         gsap.to(elem.querySelector("img"), {
//             opacity:power1,
//             ease:power1,
//         });


//     });
// });
 



// function menuOnClick() {
//     document.getElementById("menu-bar").classList.toggle("change");
//     document.getElementById("nav").classList.toggle("change");
//     document.getElementById("menu-bg").classList.toggle("change-bg");
//   }

//   data-cursor-text="welcome"

const open = document.querySelector('.container');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to('nav', { right: 0 })
      .to('nav', { height: '100vh' }, '-=.1')
      .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
      .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
      .to('nav h2', { opacity: 1 }, '-=1');
  }
});

close.addEventListener('click', () => {
  tl.reverse();
});



var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});



    

  //   const cursor = new MouseFollower({
  //     container:'body',
  //     speed: 0.3
  // });