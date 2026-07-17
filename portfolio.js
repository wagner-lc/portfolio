document.addEventListener("DOMContentLoaded", shrinkHero);

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
            { image: "imagens/IMG1.png", text: "Página inicial do site" },
            { image: "imagens/IMG2.png", text: "Sobre o projeto" },
            { image: "imagens/IMG3.png", text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }   
        ],

        site: 'https://wortalkombat.netlify.app',
        github: 'https://github.com/wagner-lc/ProjectMK'
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
    previewText.textContent = project.gallery[0].text;

    project.gallery.forEach(item => {

        const thumb = document.createElement("img");

        thumb.src = item.image;

        thumb.addEventListener("mouseenter", () => {

            clearTimeout(galleryTimer);

            preview.classList.add("fade");
            previewText.classList.add("fade");

            galleryTimer = setTimeout(() => {

                preview.src = item.image;
                previewText.textContent = item.text;

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

//Hero shrink

function shrinkHero() {
    const hero = document.getElementById("hero");
    const heroImage = hero.querySelector("img");
    const heroLinks = document.getElementById("hero-links");
    const heroTitle = heroLinks.querySelector("h1");
    const heroUl = heroLinks.querySelector("ul");
    const heroParagraph = heroLinks.querySelector("p");
    const heroTech = document.querySelector(".tech");
    const heroNav = document.getElementById("hero-nav");
    const menuNav = document.querySelector(".menu-nav");

    let isShrink = false;

    window.addEventListener("scroll", function() {
        
        if (!isShrink && window.scrollY > 400) {
            isShrink = true;
            hero.classList.add("shrink");

        } else if (isShrink && window.scrollY < 120) {
            isShrink = false;
            hero.classList.remove("shrink");
        }
        console.log("scrollY:", window.scrollY, "isShrink:", isShrink);
        /*
        const shrink = window.scrollY > 350; // Valor de scroll para iniciar o shrink

        hero.classList.toggle("shrink", shrink);
        heroImage.classList.toggle("shrink", shrink);
        heroLinks.classList.toggle("shrink", shrink);
        heroTitle.classList.toggle("shrink", shrink);
        heroUl.classList.toggle("shrink", shrink);
        heroParagraph.classList.toggle("shrink", shrink);
        heroTech.classList.toggle("shrink", shrink);
        heroNav.classList.toggle("shrink", shrink);
        menuNav.classList.toggle("shrink", shrink);
        if (window.scrollY > 250) {
            hero.classList.toggle("shrink", shrink);
            heroImage.classList.add("shrink");
            heroLinks.classList.add("shrink");
            heroTitle.classList.add("shrink");
            heroUl.classList.add("shrink");
            heroParagraph.classList.add("shrink");
            heroTech.classList.add("shrink");
            menuNav.classList.add("shrink");
        } else {
            hero.classList.remove("shrink");
            heroImage.classList.remove("shrink");
            heroLinks.classList.remove("shrink");
            heroTitle.classList.remove("shrink");
            heroUl.classList.remove("shrink");
            heroParagraph.classList.remove("shrink");
            heroTech.classList.remove("shrink");
            menuNav.classList.remove("shrink");
        }*/
    });
    console.log("shrinkHero funcionando");
}