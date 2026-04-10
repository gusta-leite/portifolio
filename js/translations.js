function changeLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    TEXT_KEYS.forEach(key => {
        document.getElementById(key).textContent = t[key];
    });

    const aboutImg = document.getElementById("aboutimg");
    if (aboutImg) {
        aboutImg.src = t.imgSrc1;
        aboutImg.alt = t.imgAlt1;
    }

    const projecImg = document.getElementById("projecimg");
    if (projecImg) {
        projecImg.src = t.imgSrc2;
        projecImg.alt = t.imgAlt2;
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
        imgSrc1: "../img/texto.svg",
        imgAlt1: "sobre mim",
        imgSrc2: "../img/Projetos.svg",
        imgAlt2: "meus projetos"
    },
    en: {
        dividertext: "the dream of keeping the internet alive remains alive.",
        whatsapp: "send me a message.",
        telainicial: "homepage",
        projc: "projects",
        sobremim: "about me",
        imgSrc1: "../img/texto-eng.svg",
        imgAlt1: "about me",
        imgSrc2: "../img/Projetoseng.svg",
        imgAlt2: "my projects"
    }
};

const TEXT_KEYS = ["dividertext", "whatsapp", "telainicial", "projc", "sobremim"];

document.getElementById("language-selector").addEventListener("change", e => {
    changeLanguage(e.target.value);
});
