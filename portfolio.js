document.addEventListener("DOMContentLoaded", shrinkHero);
document.addEventListener("DOMContentLoaded", animateSections);

//Projects

const projects = {

    gatman: {
        title: "GatMan",
        //description: "Sistema interno de manutenção hoteleira com gestão de ocorrências, quartos e galerias.",

        //image: "imagens/gatman.jpeg",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL"
        ],

        gallery: [
            { image: "imagens/html.webp", text: "Página inicial do site" },
            { image: "imagens/IMG1.png", text: "Sobre o projeto" },
            { image: "imagens/IMG3.png", text: "Contato" }
        ],

        site: 'https://gatman.rf.gd',
        github: 'https://github.com/wagner-lc/gatman'
    },

    wortalkombat: {
        title: "Wortal Kombat",
        //description: "Portal dedicado à franquia Mortal Kombat com centenas de páginas de conteúdo.",

        //image: "imagens/wortal-kombat.png",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        gallery: [
            { image: "imagens/IMG1.png", text: {pt: "Página inicial do site", en: "Home page"} },
            { image: "imagens/IMG2.png", text: "Sobre o projeto" },
            { image: "imagens/IMG3.png", text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }   
        ],

        site: 'https://wortalkombat.netlify.app',
        github: 'https://github.com/wagner-lc/ProjectMK'
    }
};

const languages = {
    pt:{
        subTitle: "Desenvolvedor Web Júnior",
        subAbout: "Sobre mim",
        subProject: "Projetos",
        h2About: "Sobre mim",
        pAbout: "Desenvolvedor web com experiência em HTML,CSS, JavaScript e PHP. Atualmente mantenho projetos publicados e em constante evolução.",
        h2Project: "Projetos"

    },

    en: {
        subTitle: "Junior Web Developer",
        subAbout: "About me",
        subProject: "Projects",
        h2About: "About me",
        pAbout: "Web developer with experience in HTML, CSS, JavaScript, and PHP. I currently maintain published projects that are constantly evolving.",
        h2Project: "Projects"
    } 
};
//Objeto technologyIcons

const technologyIcons = {
    'HTML': 'imagens/html.webp',
    'CSS': 'imagens/css.webp',
    'JavaScript': 'imagens/js.webp',
    'PHP': 'imagens/php.webp',
    'MySQL': 'imagens/mysql.png'
};

const title = document.getElementById("project-title");
//const image = document.getElementById("project-image");
//const description = document.getElementById("project-description");
const tech = document.getElementById("project-tech");
const gallery = document.getElementById("project-gallery");
const site = document.getElementById("project-site");
const github = document.getElementById("project-github");

const subtitle = document.getElementById("languages-p");
const about = document.querySelectorAll(".about-title");
const project = document.querySelectorAll(".project-title");
const h2About = document.getElementById("about-h2");
const pAbout = document.getElementById("about-p");
const h2Project = document.getElementById("projects-h2");

let currentLanguage = "pt";

console.log(currentLanguage);

function renderLanguage(language){

    subtitle.textContent = language.subTitle;

    about.forEach (item => {item.textContent = language.subAbout;});
    project.forEach (item => {item.textContent = language.subProject;});

    h2About.textContent = language.h2About;
    pAbout.textContent = language.pAbout;
    h2Project.textContent = language.h2Project;
    console.log(currentLanguage);


}
document
    .querySelectorAll("[data-language]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const id = button.dataset.language;

            currentLanguage = id;

            renderLanguage(languages[id]);

        });

    });

function renderTech(technologies) {

    tech.innerHTML = "";

    technologies.forEach(item => {

        const img = document.createElement("img");

        img.src = technologyIcons[item];
        img.alt = item;

        tech.appendChild(img);
    });
    console.log("renderTech funcionando");
}


function renderProject(project) {

    title.textContent = project.title;

    /*image.src = project.image;
    image.alt = project.title;

    description.textContent = project.description;*/

    site.href = project.site;
    github.href = project.github;

    renderTech(project.tech);
    renderGallery(project);
    animateProjectParts();

    console.log("renderProject funcionando");
}

document.querySelectorAll(".project-card img").forEach(card => {
        card.addEventListener("click", () => {

            const id = card.dataset.project;

            renderProject(projects[id]);
        });

    });

    const projectGallery = document.getElementById("project-gallery");
    const galleryThumbs = document.getElementById("gallery-thumbs");
    const preview = document.getElementById("gallery-preview");
    const previewText = document.getElementById("gallery-preview-text");

let galleryTimer;

function renderGallery(project) {

    galleryThumbs.innerHTML = "";

    preview.src = project.gallery[0].image;
    previewText.textContent = project.gallery[0].text[currentLanguage];

    project.gallery.forEach(item => {

        const thumb = document.createElement("img");

        thumb.src = item.image;

        thumb.addEventListener("mouseenter", () => {

            clearTimeout(galleryTimer);

            preview.classList.add("fade");
            previewText.classList.add("fade");

            galleryTimer = setTimeout(() => {

                preview.src = item.image;
                previewText.textContent = item.text[currentLanguage];

                preview.classList.remove("fade");
                previewText.classList.remove("fade");

            }, 450);

        });

        galleryThumbs.appendChild(thumb);

    });

}

//Fade geral
function animateProjectParts() {

    const parts = document.querySelectorAll('.project-part');

    parts.forEach(part => {
        part.classList.remove('show');
    });

    parts.forEach((part, index) => {
        setTimeout(() => {
            part.classList.add('show');
        }, index * 300);
    });
    console.log("animateProjectParts funcionando");

}
// Fade seções
function animateSections() {

    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.3 /*Intersection Observer faz com que a animação só funcione a partir deste ponto, ou seja com 30% da seção mostrada.*/
    });

    sections.forEach(section => {
        observer.observe(section);
    });

}
//Hero shrink

function shrinkHero() {

    const hero = document.getElementById("hero");
    const menuNav = document.getElementById("menu-nav")
    const heroShrink = document.getElementById("hero-shrink");

    let isShrink = false;

    window.addEventListener("scroll", () => {

        if (!isShrink && window.scrollY > 150) {

            isShrink = true;

            hero.classList.add("hide");
            menuNav.classList.add("hide");
            heroShrink.classList.add("show");

        } else if (isShrink && window.scrollY < 120) {

            isShrink = false;

            hero.classList.remove("hide");
            menuNav.classList.remove("hide");
            heroShrink.classList.remove("show");

        }

    });

}