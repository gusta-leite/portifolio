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
if (modelViewer) {
  modelViewer.addEventListener('load', () => {
    modelViewer.addEventListener('camera-change', () => {
      const orbit = modelViewer.getCameraOrbit();
      const targetPhi = 75 * (Math.PI / 180);
      const newPhi = orbit.phi * 0.7 + targetPhi * 0.3;

      modelViewer.cameraOrbit =
        `${orbit.theta}deg ${newPhi * (180 / Math.PI)}deg ${orbit.radius}%`;
    });
  });
}

// 

function ajustarAlturaSidebars() {
  const divider = document.querySelector('.divider');
  const sidebars = document.querySelectorAll('.sidebar-right, .sidebar-left');
  const landing = document.querySelector('.landing');

  if (divider && sidebars.length > 0 && landing) {
    const alturaIdeal = Math.ceil(
      divider.getBoundingClientRect().top - landing.getBoundingClientRect().top
    );

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
    requestAnimationFrame(ajustarAlturaSidebars);
  });

  linkProjetos.addEventListener('click', function (event) {
    event.preventDefault();
    secaoInicial.style.display = 'none';
    secaoSobre.style.display = 'none';
    secaoProjetos.style.display = 'block';
    requestAnimationFrame(ajustarAlturaSidebars);
  });

  linkSobre.addEventListener('click', function (event) {
    event.preventDefault();
    secaoInicial.style.display = 'none';
    secaoProjetos.style.display = 'none';
    secaoSobre.style.display = 'flex';
    requestAnimationFrame(ajustarAlturaSidebars);
  });

  const modelViewer = document.querySelector('model-viewer');
  if (modelViewer) {
    modelViewer.addEventListener('load', ajustarAlturaSidebars);
  }
  window.addEventListener('load', ajustarAlturaSidebars);

  const lpContainer = document.querySelector('.lp-container');
  if (lpContainer && 'ResizeObserver' in window) {
    new ResizeObserver(ajustarAlturaSidebars).observe(lpContainer);
  }
});

window.addEventListener('resize', ajustarAlturaSidebars);

// dot grid background
(function () {
  const canvas = document.getElementById('dot-grid');
  const ctx    = canvas.getContext('2d');

  const SP   = 8;
  const DR   = 0.82;
  const BASE = 0.115;

  let W, H, COLS, ROWS, N, bright, locked;
  let logoPX = 0, logoPY = 0;

  const C = {
    dimDot : 'rgba(195,190,182, 0.130)',
    glowA  : a => `rgba(248,244,236,${a})`,
    glowB  : a => `rgba(210,203,190,${a})`,
    glowC  : a => `rgba(162,155,144,${a})`,
    core   : a => `rgba(255,252,244,${a})`,
  };

  function initGrid() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    COLS   = Math.ceil(W / SP) + 1;
    ROWS   = Math.ceil(H / SP) + 1;
    N      = COLS * ROWS;
    bright = new Float32Array(N).fill(BASE);
    locked = new Uint8Array(N);
  }

  initGrid();
  window.addEventListener('resize', initGrid);

  const logo404 = document.getElementById('logo');
  const LOGO_W = 69, LOGO_H = 69;

  function spawnBurst(bx, by, radius) {
    const cx = Math.round(bx / SP);
    const cy = Math.round(by / SP);
    const R = radius || 7;
    for (let dr = -R; dr <= R; dr++) {
      for (let dc = -R; dc <= R; dc++) {
        const dist = Math.sqrt(dr * dr + dc * dc);
        if (dist > R) continue;
        const col = cx + dc, row = cy + dr;
        if (col < 0 || col >= COLS || row < 0 || row >= ROWS) continue;
        const i = row * COLS + col;
        if (locked[i]) continue;
        locked[i] = 1;
        const t = 1 - dist / R;
        const obj = { v: BASE };
        gsap.to(obj, {
          v: BASE + t * 0.55,
          delay: dist * 0.014,
          duration: 0.12 + t * 0.08,
          yoyo: true, repeat: 1, ease: 'power2.out',
          onUpdate()   { bright[i] = obj.v; },
          onComplete() { bright[i] = BASE; locked[i] = 0; }
        });
      }
    }
  }

  function sparkle() {
    const c = Math.floor(Math.random() * COLS);
    const r = Math.floor(Math.random() * ROWS);
    const i = r * COLS + c;
    if (locked[i]) return;
    locked[i] = 1;
    const obj = { v: BASE };
    gsap.to(obj, {
      v: BASE + 0.06 + Math.random() * 0.14,
      duration: 0.18 + Math.random() * 0.36,
      yoyo: true, repeat: 1, ease: 'sine.inOut',
      onUpdate()   { bright[i] = obj.v; },
      onComplete() { bright[i] = BASE; locked[i] = 0; }
    });
  }

  (function sparkleLoop() {
    sparkle();
    gsap.delayedCall(0.08 + Math.random() * 0.18, sparkleLoop);
  })();

  function render() {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = C.dimDot;
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      if (bright[i] < 0.18) {
        const col = i % COLS, row = (i / COLS) | 0;
        const x = col * SP + SP * 0.5, y = row * SP + SP * 0.5;
        ctx.moveTo(x + DR, y);
        ctx.arc(x, y, DR, 0, Math.PI * 2);
      }
    }
    ctx.fill();

    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < N; i++) {
      const b = bright[i];
      if (b < 0.18) continue;
      const col = i % COLS, row = (i / COLS) | 0;
      const x = col * SP + SP * 0.5, y = row * SP + SP * 0.5;
      const glowR = DR * 1.4 + b * 5.5;
      const grd   = ctx.createRadialGradient(x, y, 0, x, y, glowR);
      grd.addColorStop(0,    C.glowA(b * 0.19));
      grd.addColorStop(0.28, C.glowB(b * 0.09));
      grd.addColorStop(0.62, C.glowC(b * 0.032));
      grd.addColorStop(1,    'rgba(90,86,80,0)');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(x, y, glowR, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalCompositeOperation = 'source-over';
    for (let i = 0; i < N; i++) {
      const b = bright[i];
      if (b < 0.18) continue;
      const col = i % COLS, row = (i / COLS) | 0;
      const x = col * SP + SP * 0.5, y = row * SP + SP * 0.5;
      ctx.fillStyle = C.core(Math.min(1, b * 1.18));
      ctx.beginPath();
      ctx.arc(x, y, DR * (1.05 + b * 0.38), 0, Math.PI * 2);
      ctx.fill();
    }

    if (logo404) {
      ctx.globalCompositeOperation = 'lighter';
      const lx = logoPX + LOGO_W * 0.5;
      const ly = logoPY + LOGO_H * 0.5;
      const halo = ctx.createRadialGradient(lx, ly, 0, lx, ly, 130);
      halo.addColorStop(0,    'rgba(255,252,244,0.024)');
      halo.addColorStop(0.45, 'rgba(255,252,244,0.008)');
      halo.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(lx, ly, 130, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }

    requestAnimationFrame(render);
  }

  render();

  if (logo404) {
    const COLORS = [
      '#ece8e0', '#d4b87c', '#84b8ca', '#b09cce',
      '#8cbf92', '#c89074', '#96bcb2', '#caa87a',
    ];
    let colorIdx = 0;

    let px = 120 + Math.random() * Math.max(1, W - LOGO_W - 200);
    let py = 100 + Math.random() * Math.max(1, H - LOGO_H - 200);

    const SPD = 145;
    const base = Math.PI * 0.25 + (Math.random() - 0.5) * 0.35;
    let vx = Math.cos(base) * SPD * (Math.random() < 0.5 ? 1 : -1);
    let vy = Math.sin(base) * SPD * (Math.random() < 0.5 ? 1 : -1);

    gsap.set(logo404, { x: px, y: py, color: COLORS[0] });
    gsap.ticker.lagSmoothing(500, 33);

    gsap.ticker.add((_, deltaTime) => {
      const dt = Math.min(deltaTime, 50) / 1000;

      px += vx * dt;
      py += vy * dt;

      let hitX = false, hitY = false;

      if (px <= 0)              { px = 0;          vx =  Math.abs(vx); hitX = true; }
      else if (px >= W - LOGO_W) { px = W - LOGO_W; vx = -Math.abs(vx); hitX = true; }
      if (py <= 0)              { py = 0;          vy =  Math.abs(vy); hitY = true; }
      else if (py >= H - LOGO_H) { py = H - LOGO_H; vy = -Math.abs(vy); hitY = true; }

      if (hitX || hitY) {
        colorIdx = (colorIdx + 1) % COLORS.length;
        gsap.to(logo404, { color: COLORS[colorIdx], duration: 0.16, ease: 'none' });

        gsap.killTweensOf(logo404, 'scaleX,scaleY,scale');
        if (hitX && hitY) {
          gsap.to(logo404, {
            scale: 1.22, duration: 0.09, yoyo: true, repeat: 1, ease: 'power2.out',
            onComplete() { gsap.set(logo404, { scale: 1 }); }
          });
        } else {
          gsap.to(logo404, {
            scaleX: hitX ? 0.8 : 1.12,
            scaleY: hitY ? 0.8 : 1.12,
            duration: 0.07, yoyo: true, repeat: 1, ease: 'power1.inOut',
            onComplete() { gsap.set(logo404, { scaleX: 1, scaleY: 1 }); }
          });
        }

        const bx = hitX ? (vx > 0 ? 0 : W) : px + LOGO_W * 0.5;
        const by = hitY ? (vy > 0 ? 0 : H) : py + LOGO_H * 0.5;
        spawnBurst(bx, by, hitX && hitY ? 9 : 7);
      }

      logoPX = px;
      logoPY = py;
      gsap.set(logo404, { x: px, y: py });
    });

    window.addEventListener('resize', () => {
      px = Math.max(0, Math.min(px, W - LOGO_W));
      py = Math.max(0, Math.min(py, H - LOGO_H));
    });
  }
})();

document.addEventListener('DOMContentLoaded', () => {
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
