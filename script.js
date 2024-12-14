document.documentElement.style.cursor = 'none';

// gsap to cursor

gsap.set(".cursor", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".cursor", "x", {duration: 0.4, ease: "power3"}),
yTo = gsap.quickTo(".cursor", "y", {duration: 0.4, ease: "power3"});

window.addEventListener("mousemove", e => {
xTo(e.clientX);
yTo(e.clientY);

});

gsap.to(".cursor", {
    rotation: 360,
    duration: 5,
    ease: "power1.inOut",
    repeat: -1
  });

// gsap rotation

gsap.to(".star", {
  rotation: 360,
  duration: 20,
  ease: "linear",
  repeat: -1,
  transformOrigin: "50% 50%"
});