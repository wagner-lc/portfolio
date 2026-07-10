//Projects

const projects = {

    gatman: {
        title: "GatMan",
        description: "Sistema interno de manutenção hoteleira com gestão de ocorrências, quartos e galerias.",

        image: "imagens/gatman.jpeg",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL"
        ],

        gallery: [
            { image: "imagens/html.webp", text: "Página inicial do site" },
            { image: "imagens/gatman2.png", text: "Sobre o projeto" },
            { image: "imagens/gatman3.png", text: "Contato" }
        ],

        site: 'https://gatman.rf.gd',
        github: 'https://github.com/wagner-lc/gatman'
    },

    wortalkombat: {
        title: "Wortal Kombat",
        description: "Portal dedicado à franquia Mortal Kombat com centenas de páginas de conteúdo.",

        image: "imagens/wortal-kombat.png",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        gallery: [
            { image: "imagens/wk1.png", text: "Página inicial do site" },
            { image: "imagens/wk2.png", text: "Sobre o projeto" },
            { image: "imagens/wk3.png", text: "Contato" }   
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
const image = document.getElementById("project-image");
const description = document.getElementById("project-description");
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

    image.src = project.image;
    image.alt = project.title;

    description.textContent = project.description;

    site.href = project.site;
    github.href = project.github;

    renderTech(project.tech);
    renderGallery(project);

    console.log("renderProject funcionando");
}
/*
function renderGallery(project) {
    
    gallery.innerHTML = "";

    project.gallery.forEach(item => {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.text;

        const p = document.createElement("p");
        p.textContent = item.text;

        gallery.appendChild(img);
        gallery.appendChild(p);
    });
    console.log("renderGallery funcionando");
}*/

document
    .querySelectorAll(".project-card img")
    .forEach(card => {

        card.addEventListener("click", () => {

            const id = card.dataset.project;

            renderProject(projects[id]);
        });

    });

    const galleryThumbs = document.getElementById("gallery-thumbs");
    const preview = document.getElementById("gallery-preview");
    const previewText = document.getElementById("gallery-preview-text");

function renderGallery(project) {

    galleryThumbs.innerHTML = "";

    preview.src = project.gallery[0].image;
    previewText.textContent = project.gallery[0].text;

    project.gallery.forEach(item => {

        const thumb = document.createElement("img");

        thumb.src = item.image;

        thumb.addEventListener("mouseenter", () => {

            preview.src = item.image;
            previewText.textContent = item.text;

        });

        galleryThumbs.appendChild(thumb);

    });
    console.log("renderGallery funcionando");

}
/*
//Galeria

    const preview = document.getElementById('project-gallery'); //Exibição principal
    const defaultPreview = preview.src; //Default da foto principal
    const defaultPreviewText = ''; //Default do texto principal
    const thumbs = Array.from(document.querySelectorAll('.gallery-thumbs img')); //Imagens
    const text = Array.from(document.querySelectorAll('.gallery-thumbs p')); //Textos
    const textPreview = document.getElementById('gallery-preview-text'); //Exibição principal do texto

    let resetTimer;
    let currentIndex = -1;

    //Reset imagem
    function resetPreview(){
        preview.classList.add('fade-out');
        textPreview.classList.add('fade-out');

        setTimeout(() => {
            preview.src = defaultPreview;
            preview.classList.remove('fade-out');
            textPreview.classList.remove('fade-out');
            textPreview.textContent = defaultPreviewText;
            currentIndex = -1;
            
        }, 500);
    }

    //Timer
    function restartPreviewTimer(){
        clearTimeout(resetTimer);
        resetTimer = setTimeout(resetPreview, 10000);
    }

    //Mostrar imagem
    function showItem(project) {
        currentIndex = (project.index + thumbs.length) % thumbs.length;

        preview.classList.add('fade-out');
        textPreview.classList.add('fade-out');
        console.log(currentIndex);
        console.log(thumbs.length);


        setTimeout(() => {
           preview.src = thumbs[currentIndex].src;
           textPreview.textContent = text[currentIndex].textContent;
        
           preview.classList.remove('fade-out'); 
           textPreview.classList.remove('fade-out');
        
        }, 800);

        restartPreviewTimer();
    }

    //HOVER / CLICK
    thumbs.forEach((img, index) => {
        img.addEventListener('mouseenter', () => showItem(index));
        img.addEventListener('click', () => showItem(index));
        img.addEventListener('mouseleave', () => resetPreview());
    });

    //Teclado
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            showItem(currentIndex - 1);
        } else if (event.key === 'ArrowRight') {
            showItem(currentIndex + 1);
        }
    });

 */