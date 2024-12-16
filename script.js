document.documentElement.style.cursor = 'none';

// gsap to cursor


gsap.set(".cursor, .cursor2", { xPercent: -50, yPercent: -50 });

let xToCursor = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
    yToCursor = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

let xToCursor2 = gsap.quickTo(".cursor2", "x", { duration: 0.6, ease: "power3" }), 
    yToCursor2 = gsap.quickTo(".cursor2", "y", { duration: 0.6, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xToCursor(e.clientX); 
  yToCursor(e.clientY);

  xToCursor2(e.clientX);
  yToCursor2(e.clientY);
});

// gsap rotation

gsap.to(".star", {
  rotation: 360,
  duration: 20,
  ease: "linear",
  repeat: -1,
  transformOrigin: "50% 50%"
});

// botão

const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.button').forEach(el => el.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;
   
  this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
}));

$$('.button').forEach(el => el.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));