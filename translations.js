const translations = {
    pt: {
        dividertext: "o sonho de manter a internet viva segue vivo.",
        whatsapp: "me mande uma mensagem.",
        telainicial: "tela inicial",
        projc: "projetos",
        sobremim: "sobre mim",

        imgSrc1: "img/texto.svg",
        imgAlt1: "sobre mim",

        imgSrc2: "img/Projetos.svg",
        imgAlt2: "meus projetos"
    },
    en: {
        dividertext: "the dream of keeping the internet alive remains alive.",
        whatsapp: "send me a message.",
        telainicial: "homepage",
        projc: "projects",
        sobremim: "about me",

        imgSrc1: "img/texto-eng.svg",
        imgAlt1: "about me",

        imgSrc2: "img/Projetos-eng.svg",
        imgAlt2: "my projects"
    }
};

function changeLanguage(lang) {
    const data = translations[lang];

    if (data) {
        document.getElementById('dividertext').innerText = data.dividertext;
        document.getElementById('whatsapp').innerText = data.whatsapp;
        document.getElementById('telainicial').innerText = data.telainicial;
        document.getElementById('projc').innerText = data.projc;
        document.getElementById('sobremim').innerText = data.sobremim;

        const img = document.getElementById('aboutimg');
        img.src = data.imgSrc1;
        img.alt = data.imgAlt1;

        const img2 = document.getElementById('projecimg');
        img2.src = data.imgSrc2;
        img2.alt = data.imgAlt2;

        document.documentElement.lang = lang;
    }
}

document.getElementById('language-selector').addEventListener('change', function (event) {
    changeLanguage(event.target.value);
});