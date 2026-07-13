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

// Fade galeria
/*
function animateGallery() {

    const galleryParts = document.querySelectorAll('.gallery-part');

    galleryParts.forEach(part => {
        part.classList.remove('fade');
    });

    setTimeout(() => {

        galleryParts.forEach((part, index) => {

            setTimeout(() => {
                part.classList.add('fade');
            }, index * 700);

        });

    }, 50);

}*/