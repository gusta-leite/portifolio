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

//
gsap.set(".curproj, .curprojmini", { xPercent: -50, yPercent: -50, opacity: 0 });

let xToSelect = gsap.quickTo(".curproj", "x", { duration: 0.4, ease: "power3" }),
  yToSelect = gsap.quickTo(".curproj", "y", { duration: 0.4, ease: "power3" });
let xToSelectmini = gsap.quickTo(".curprojmini", "x", { duration: 0.6, ease: "power3" }),
  yToSelectmini = gsap.quickTo(".curprojmini", "y", { duration: 0.6, ease: "power3" });

document.querySelectorAll(".bento__item").forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    xToSelect(e.clientX);
    yToSelect(e.clientY);
    xToSelectmini(e.clientX);
    yToSelectmini(e.clientY);
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(".curproj, .curprojmini", { opacity: 0, duration: 0.2 });
    gsap.to(".cursor, .cursor2", { opacity: 1, duration: 0.2 });
  });

  item.addEventListener("mouseenter", () => {
    gsap.to(".curproj, .curprojmini", { opacity: 1, duration: 0.2 });
    gsap.to(".cursor, .cursor2", { opacity: 0, duration: 0.2 });
  });
});

// gsap rotation
gsap.to(".star", {
  rotation: 360,
  duration: 9,
  ease: "circ.inOut",
  repeat: -1,
  transformOrigin: "50% 50%"
});

gsap.to(".star-landing", {
  rotation: 360,
  duration: 12,
  ease: "circ.inOut",
  repeat: -1,
  transformOrigin: "50% 50%"
});

// botão
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.button').forEach(el => el.addEventListener('mousemove', function (e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width / 2;
  const my = e.clientY - pos.top - pos.height / 2;

  this.style.transform = 'translate(' + mx * 0.15 + 'px, ' + my * 0.3 + 'px)';
  this.style.transform += 'rotate3d(' + mx * -0.1 + ', ' + my * -0.3 + ', 0, 10deg)';
  this.children[0].style.transform = 'translate(' + mx * 0.025 + 'px, ' + my * 0.075 + 'px)';
}));

$$('.button').forEach(el => el.addEventListener('mouseleave', function () {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));

// popup section
const triggers = document.querySelectorAll('.js-toggle-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const targetId = trigger.dataset.target;
    const content = document.querySelector(targetId);
    if (content) {
      content.classList.toggle('show');
    }
  });
});

const triggers2 = document.querySelectorAll('.js-toggle-trigger-oth');

triggers2.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const targetId = trigger.dataset.target;
    const content = document.querySelector(targetId);
    if (content) {
      content.classList.toggle('show');
    }
  });
});


// animação
function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
const logo = document.querySelector("#model-pc");

window.addEventListener('load', function () {
  sleep(0.1).then(() => {
    logo.classList.add('invisible');
  });
  sleep(0.4).then(() =>
    logo.classList.add('visible'),
  );
});

// movement and loading

let counterObject = {
  value: 1
};
const counterElement = document.getElementById('counter');

gsap.to(counterObject, {
  value: 99,
  duration: 2,
  ease: "power1.out",
  onUpdate: function () {
    counterElement.textContent = Math.floor(counterObject.value);
  }
});

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
const loading = document.querySelector(".loading");

window.addEventListener('load', function () {
  sleep(2, 9).then(() => {
    loading.classList.add('hidden');
    setTimeout(() => {
      loading.style.display = 'none';
    }, 500);
  });
});

// smooth scroll
function smoothScrollGSAP(target, duration = 1.2, ease = "power2.inOut") {
  gsap.registerPlugin(ScrollToPlugin);

  gsap.to(window, {
    duration: duration,
    scrollTo: target,
    ease: ease
  });
}
// model viewer 3d tools

const modelViewer = document.querySelector('model-viewer');
modelViewer.addEventListener('load', () => {
  modelViewer.addEventListener('camera-change', () => {
    const orbit = modelViewer.getCameraOrbit();
    const targetPhi = 75 * (Math.PI / 180);
    const newPhi = orbit.phi * 0.7 + targetPhi * 0.3;

    modelViewer.cameraOrbit =
      `${orbit.theta}deg ${newPhi * (180 / Math.PI)}deg ${orbit.radius}%`;
  });
});

// 

function ajustarAlturaSidebars() {
  const divider = document.querySelector('.divider');
  const sidebars = document.querySelectorAll('.sidebar-right, .sidebar-left');

  if (divider && sidebars.length > 0) {
    const alturaIdeal = divider.offsetTop;

    sidebars.forEach(elemento => {
      elemento.style.height = `${alturaIdeal}px`;
      elemento.style.marginTop = '0';
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const linkInicio = document.querySelector('a[href="#inicio"]');
  const linkProjetos = document.querySelector('a[href="#projetos"]');
  const linkSobre = document.querySelector('a[href="#sobre"]');
  const secaoInicial = document.querySelector('.lp');
  const secaoProjetos = document.getElementById('projetos');
  const secaoSobre = document.getElementById('colabt');

  linkInicio.addEventListener('click', function (event) {
    event.preventDefault();
    secaoProjetos.style.display = 'none';
    secaoSobre.style.display = 'none';
    secaoInicial.style.display = 'block';
    setTimeout(ajustarAlturaSidebars, 0);
  });

  linkProjetos.addEventListener('click', function (event) {
    event.preventDefault();
    secaoInicial.style.display = 'none';
    secaoSobre.style.display = 'none';
    secaoProjetos.style.display = 'block';
    setTimeout(ajustarAlturaSidebars, 0);
  });

  linkSobre.addEventListener('click', function (event) {
    event.preventDefault();
    secaoInicial.style.display = 'none';
    secaoProjetos.style.display = 'none';
    secaoSobre.style.display = 'flex';
    setTimeout(ajustarAlturaSidebars, 0);
  });

  const modelViewer = document.querySelector('model-viewer');
  if (modelViewer) {
    modelViewer.addEventListener('load', ajustarAlturaSidebars);
  } else {
    window.addEventListener('load', ajustarAlturaSidebars);
  }
  const Projetossection = document.querySelector('projetos');
  if (Projetossection) {
    Projetossection.addEventListener('load', ajustarAlturaSidebars);
  } else {
    window.addEventListener('load', ajustarAlturaSidebars);
  }
});

window.addEventListener('resize', ajustarAlturaSidebars);

document.addEventListener('DOMContentLoaded', () => {
  // Disable right-click and drag on images
  const images = document.querySelectorAll('img');

  images.forEach(image => {
    image.style.userSelect = 'none';
    image.style.webkitUserSelect = 'none';
    image.style.mozUserSelect = 'none';
    image.style.msUserSelect = 'none';

    image.style.webkitUserDrag = 'none';

    image.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    image.addEventListener('dragstart', (event) => {
      event.preventDefault();
    });
  });
});
