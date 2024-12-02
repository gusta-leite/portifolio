document.documentElement.style.cursor = 'none';
document.documentElement.style.cursor = 'none';

// gsap 

gsap.set(".star", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".star", "x", {duration: 0.4, ease: "power3"}),
yTo = gsap.quickTo(".star", "y", {duration: 0.4, ease: "power3"});

window.addEventListener("mousemove", e => {
xTo(e.clientX);
yTo(e.clientY);

});

gsap.to(".star", {
    rotation: 360,
    duration: 5,
    ease: "power1.inOut",
    repeat: -1
  });

//