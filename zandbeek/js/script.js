$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".header__menu").toggleClass( "active");
    });
  });

$(document).ready(function() {
    $(".header__language-switcher__main").click(function() {
        $(".arrow").toggleClass( "rotate");
        $(".header__language-switcher__body").toggleClass( "switch");
    });
  });

//   scroll effect****
TweenLite.defaultEase = Linear.easeNone;
var titles = document.querySelectorAll(".sectionTitle");
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

// create timeline
// this could also be created in a loop
tl.to("#js-slideContainer", 1, {xPercent: -20}, "label1");
// tl.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl.to("#js-slideContainer", 1, {xPercent: -40}, "label2");
// tl.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");
tl.to("#js-slideContainer", 1, {xPercent: -60}, "label3");
// tl.from(titles[3], 0.5, {opacity:0}, "label3+=0.5");
tl.to("#js-slideContainer", 1, {xPercent: -80}, "label4");
// tl.from(titles[4], 0.5, {opacity:0}, "label4+=0.5");


new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%"
})
  .setPin("#js-wrapper")
  .setTween(tl)
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "red",
  //   colorEnd: "green",
  // })
  .addTo(controller);

  // parallax effect
 
  // $('.secondary__banner__wrap').paroller();
  // $('.f-images__right').paroller();
  // $('.f-images__left').paroller();

  // parallax.js
  // initialize paroller.js and set attributes for selected elements
  $(".secondary__banner, [data-paroller-factor]").paroller({
    factor: -0.2,            // multiplier for scrolling speed and offset
    factorXs: 0.1,           // multiplier for scrolling speed and offset
    type: 'background',     // background, foreground
    direction: 'horizontal', // vertical, horizontal
    transition: 'transform 0.2s ease-in' // CSS transition
});

  $(".f-images__left, [data-paroller-factor]").paroller({
    factor: 0.2,            // multiplier for scrolling speed and offset
    factorXs: 0.1,           // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal', // vertical, horizontal
    transition: 'transform 0.2s ease-in' // CSS transition
});

  $(".f-images__right, [data-paroller-factor]").paroller({
    factor: -0.8,            // multiplier for scrolling speed and offset
    factorXs: 0.1,           // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal', // vertical, horizontal
    transition: 'transform 0.2s ease-in' // CSS transition
});
