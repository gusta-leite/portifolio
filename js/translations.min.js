const PROJECT_IMG_MAP = window.PROJECT_IMG_MAP = {
    pt: {
        fill10: '../img/projects/efivibigbig.webp',
        fill11: '../img/projects/rivotabigbig.webp',
        fill12: '../img/projects/iaplatbigbig.webp',
        fill13: '../img/projects/racaobigbig.webp',
        fill14: '../img/projects/night-marchbigbig.webp',
        fill15: '../img/projects/projongbigbig.webp',
        fill16: '../img/projects/sonhogbigbig.webp',
    },
    en: {
        fill10: '../img/projects/efivibigen.webp',
        fill11: '../img/projects/rivotabigen.webp',
        fill12: '../img/projects/iaplatbigen.webp',
        fill13: '../img/projects/racaobigen.webp',
        fill14: '../img/projects/night-marchbigen.webp',
        fill15: '../img/projects/projongbigen.webp',
        fill16: '../img/projects/sonhogbigen.webp',
    }
};

function changeLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    TEXT_KEYS.forEach(key => {
        document.getElementById(key).textContent = t[key];
    });

    ABOUT_KEYS.forEach(key => {
        const el = document.getElementById(key);
        if (el) el.innerHTML = t[key];
    });

    const projecImg = document.getElementById("projecimg");
    if (projecImg) {
        projecImg.innerHTML = `<span class="subtitle-small">${t.projecSubtitle}</span>${t.projecTitle}`;
    }

    const imgEl = document.getElementById('projImg');
    const imgMap = PROJECT_IMG_MAP[lang];
    if (imgEl && imgMap) {
        for (const key of Object.keys(imgMap)) {
            const isShowing = Object.values(PROJECT_IMG_MAP).some(m => imgEl.src.includes(m[key].replace('../', '')));
            if (isShowing) { imgEl.src = imgMap[key]; break; }
        }
    }

    document.documentElement.lang = lang;
}

const translations = {
    pt: {
        dividertext: "o sonho de manter a internet viva segue vivo.",
        whatsapp: "me mande uma mensagem.",
        telainicial: "tela inicial",
        projc: "projetos",
        sobremim: "sobre mim",
        "about-p1": "Olá, meu nome é <b>Gustavo Leite</b>, atualmente sou estagiário de UX/UI na NOOMA Digital, e acredito que um website pode ser funcional sem <b>ser entediante.</b>",
        "about-p2": "Meus sites e designs são minha forma de resolver problemas do dia a dia, além de me <b>expressar.</b> Atualmente estou trabalhando em um projeto de pesquisa científica que envolve o <b>redesign de um sistema operacional para pessoas com visão baixa.",
        "about-p3": "Estou atualmente buscando melhorar meus <b>designs systems</b> enquanto estudo <b>NextJS e Tailwind</b> para transcrever mais dos meus pensamentos para a <b>tela do computador.</b>",
        "banner-1": "<b>Certificado Profissional do Google em UX Design.</b>",
        "banner-2": "<b>Aprendendo GSAP.</b>",
        "banner-3": "<b>Estudando NextJS + Tailwind.</b>",
        projecSubtitle: "recentes",
        projecTitle: "projetos"
    },
    en: {
        dividertext: "the dream of keeping the internet alive remains alive.",
        whatsapp: "send me a message.",
        telainicial: "homepage",
        projc: "projects",
        sobremim: "about me",
        "about-p1": "Hi, my name is <b>Gustavo Leite</b>, I'm currently a UX/UI intern at Nooma Digital, and I believe a website can be functional <b>without being boring.</b>",
        "about-p2": "My websites and designs are my way of solving everyday problems, as well as <b>expressing myself</b>. I am currently working on a scientific research project that involves <b>redesigning an operating system for people with low vision.</b>",
        "about-p3": "I am currently looking to improve my <b>design systems</b> while studying <b>NextJS and Tailwind</b> to better translate my thoughts onto the <b>computer screen</b>.",
        "banner-1": "<b>Google UX Design Professional Certificate.</b>",
        "banner-2": "<b>Learning GSAP.</b>",
        "banner-3": "<b>Studying NextJS + Tailwind.</b>",
        projecSubtitle: "recent",
        projecTitle: "projects"
    }
};

const TEXT_KEYS = ["dividertext", "whatsapp", "telainicial", "projc", "sobremim"];
const ABOUT_KEYS = ["about-p1", "about-p2", "about-p3", "banner-1", "banner-2", "banner-3"];

document.getElementById("language-selector").addEventListener("change", e => {
    changeLanguage(e.target.value);
});
