document.addEventListener("DOMContentLoaded", shrinkHero);
document.addEventListener("DOMContentLoaded", animateSections);
document.addEventListener("DOMContentLoaded", toggleTheme);

/* ==========================
   CONSTS
========================== */

//Projects

const projects = {

    gatman: {
        title: "GatMan",
        description: {
            pt:"Sistema interno de gestão de manutenção hoteleira com controle de ocorrências, inspeções, status de quartos em tempo real e galeria de fotos.\n\n" +
            "⚠️ A versão apresentada neste portfólio utiliza dados fictícios para preservar a confidencialidade das informações. O sistema original encontra-se em ambiente de produção e é utilizado diariamente.",
            en: "Internal hotel maintenance management system featuring work order tracking, inspections, real-time room status, and a photo gallery.\n" + 
            "⚠️ The version presented in this portfolio uses fictional data to preserve the confidentiality of the original application. The original system currently is used in production daily. "
        },

        //image: "imagens/gatman.jpeg",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL"
        ],

        gallery: [
        {
            image: "imagens/gatman-home.png",
            title: {
                pt: "Página inicial",
                en: "Home page"
            },
            text: {
                pt: "Permite registar e acompanhar manutenções organizadas por estado (pendentes ou finalizadas), além de definir prioridade, lembretes com temporizador e repetição diária.",
                en: "Allows maintenance tasks to be registered and tracked by status (pending or completed), with support for priorities, reminders, timers and daily recurrence."
            }
        },

        {
            image: "imagens/gatman-inspecoes.png",
            title: {
                pt: "Inspeção de quartos",
                en: "Room inspection"
            },
            text: {
                pt: "Permite registar a inspeção diária dos quartos, atualizando o estado de cada item em tempo real e como todo o site é possível alternar entre os temas claro e escuro da aplicação.",
                en: "Allows daily room inspections with real-time updates for each inspection item, as all website supports switching between light and dark application themes ."
            }
        },

        {
            image: "imagens/gatman-selecao.png",
            title: {
                pt: "Seleção de quartos",
                en: "Room selection"
            },
            text: {
                pt: "Utilizada em diferentes módulos para permitir uma seleção rápida e intuitiva dos quartos.",
                en: "Used across multiple modules to provide quick and intuitive room selection."
            }
        },

        {
            image: "imagens/gatman-graficos.png",
            title: {
                pt: "Gráficos",
                en: "Charts"
            },
            text: {
                pt: "Permite visualizar gráficos e filtrar os quartos de acordo com diferentes critérios para facilitar a análise das informações.",
                en: "Displays charts with filtering options, making room information easier to analyse."
            }
        },

        {
            image: "imagens/gatman-logs.png",
            title: {
                pt: "Logs do sistema",
                en: "System logs"
            },
            text: {
                pt: "Apresenta o histórico de ações realizadas pelos utilizadores para facilitar a auditoria e o acompanhamento das alterações.",
                en: "Displays the history of user actions, making auditing and change tracking easier."
            }
        },

        {
            image: "imagens/gatman-galeria.png",
            title: {
                pt: "Galeria",
                en: "Gallery"
            },
            text: {
                pt: "Permite documentar as manutenções através de fotografias de Antes e Depois, organizadas numa galeria de consulta rápida.",
                en: "Documents maintenance work using Before and After photos organised in an easy-to-browse gallery."
            }
        },

        {
            image: "imagens/gatman-extintores.png",
            title: {
                pt: "Gestão de extintores",
                en: "Fire extinguisher management"
            },
            text: {
                pt: "Permite editar diretamente as informações dos extintores numa tabela semelhante ao Excel.",
                en: "Allows fire extinguisher information to be edited directly in an Excel-like table."
            }
        }
        ],

        site: 'https://gatman.rf.gd',
        github: 'https://github.com/wagner-lc/gatman'
    },

    wortalkombat: {
        title: "Wortal Kombat",
        description: 
            {
            pt: "Fan-site dedicado à trilogia clássica de Mortal Kombat, com biografias completas dos personagens, arenas, áudios, curiosidades e conteúdo interativo.",
            en: "Fan site dedicated to the classic Mortal Kombat trilogy, featuring complete character biographies, arenas, audio effects, trivia, and interactive content."
        },
        //image: "imagens/wortal-kombat.png",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        gallery: [
        {
            image: "imagens/wk-choose.png",
            title: {
                pt: "Choose Your Fighter",
                en: "Choose Your Fighter"
            },
            text: {
                pt: "Tela inspirada na seleção de personagens do jogo original. Ao selecionar um lutador, o utilizador é encaminhado para a página correspondente com transições e efeitos personalizados.",
                en: "Character selection screen inspired by the original game. Selecting a fighter takes the user to the corresponding page with custom transitions and effects."
            }
        },

        {
            image: "imagens/wk-arenas.png",
            title: {
                pt: "Arenas",
                en: "Arenas"
            },
            text: {
                pt: "Permite explorar as arenas do jogo com imagens, efeitos sonoros e músicas originais, proporcionando uma experiência mais imersiva.",
                en: "Explore the game's arenas with images, sound effects and original music for a more immersive experience."
            }
        },

        {
            image: "imagens/wk-responsivo.png",
            title: {
                pt: "Responsividade",
                en: "Responsive Design"
            },
            text: {
                pt: "O site é totalmente responsivo e adapta a interface para diferentes tamanhos de ecrã. No mobile, o menu é reposicionado para a parte inferior, facilitando a navegação com uma mão.",
                en: "The website is fully responsive and adapts its layout to different screen sizes. On mobile devices, the navigation menu is moved to the bottom for easier one-handed use."
            }
        },

        {
            image: "imagens/wk-bio.jpg",
            title: {
                pt: "Biografia dos personagens",
                en: "Character biographies"
            },
            text: {
                pt: "Cada personagem possui uma página dedicada com biografia, imagens, GIFs e efeitos sonoros, recriando a atmosfera clássica da trilogia original.",
                en: "Each character has a dedicated page featuring a biography, images, GIFs, and sound effects, recreating the atmosphere of the original trilogy."
            }
        },

        {
            image: "imagens/wk-dropdown.jpg",
            title: {
                pt: "Menus e interatividade",
                en: "Navigation and interactivity"
            },
            text: {
                pt: "Ao rolar a página, o cabeçalho é reduzido para ampliar a área de visualização. O site também conta com menus dropdown, sons on/off, botão de retorno ao topo e outros recursos para melhorar a navegação.",
                en: "As the user scrolls, the header shrinks to maximize the viewing area. The site also features dropdown menus, sounds effects on/off, a back-to-top button, and other interactive navigation features."
            }
        },

        {
            image: "imagens/wk-galeria.png",
            title: {
                pt: "Galeria",
                en: "Gallery"
            },
            text: {
                pt: "Galeria organizada com imagens dos jogos, efeitos de transição e sistema de pré-visualização para facilitar a navegação entre os conteúdos.",
                en: "Organized gallery featuring game artwork, transition effects and an image preview system for easier navigation."
            }
        }
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
        pAbout: "Desenvolvedor Web Júnior com experiência em HTML, CSS, JavaScript, PHP e MySQL. Desenvolvo aplicações web completas, desde a interface até a integração com banco de dados. Atualmente mantenho projetos publicados e em constante evolução, aplicando boas práticas de desenvolvimento e buscando aprimorar continuamente minhas habilidades.",
        h2Project: "Projetos",
        techTitle: "Tecnologias utilizadas",
        h2Formation: "Formações",
        formationText:
            "• Engenharia Mecânica - Universidade Anhanguera - São Paulo/SP (2017)\n" +
            "• Técnico em Segurança do Trabalho - Centro Paula Souza São Paulo/SP (2011) \n" +
            "• Cursos online de HTML, CSS, JavaScript - Udemy\n" +
            "• Aprendizado contínuo por meio de projetos próprios e documentação oficial.\n\n" + 

            "Atualmente continuo a desenvolver as minhas competências através de cursos online, documentação oficial e projetos práticos, aplicando os conhecimentos diretamente em aplicações reais.\n" +
            "Estou em transição para a área de desenvolvimento web, com foco em Front-end e Back-end utilizando tecnologias modernas e aprendizagem contínua."

    },

    en: {
        subTitle: "Junior Web Developer",
        subAbout: "About me",
        subProject: "Projects",
        h2About: "About me",
        pAbout: "Junior Web Developer with experience in HTML, CSS, JavaScript, PHP, MySQL, and Git. I develop complete web applications, from user interfaces to database integration. I currently maintain published projects that are continuously evolving, applying good development practices while constantly improving my technical skills.",
        h2Project: "Projects",
        techTitle: "Tecnologies used",
        h2Formation: "Education",
        formationText:
            "• Mechanical Engineering - Universidade Anhanguera - São Paulo/SP (2017)\n" +
            "• Occupational Safety Technician - Centro Paula Souza São Paulo/SP (2011) \n" +
            "• Online courses in HTML, CSS, JavaScript, PHP, MySQL and Git\n" +
            "• Continuous learning through personal projects and official documentation.\n\n" +

            "I continuously improve my web development skills through online courses, official documentation and hands-on projects, applying new knowledge to real-world applications.\n" +
            "Currently transitioning into Web Development, focusing on Front-end and Back-end technologies through continuous learning and practical projects."

    
    }, 
};

//Objeto technologyIcons

const technologyIcons = {
    'HTML': 'imagens/html.webp',
    'CSS': 'imagens/css.webp',
    'JavaScript': 'imagens/js.webp',
    'PHP': 'imagens/php.webp',
    'MySQL': 'imagens/mysql.png',
    'Git': 'imagens/git.png'
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
const description = document.getElementById("project-description");
const techTitle = document.getElementById("tech-title");

const h2Formation = document.getElementById("formation-h2");
const formationText = document.getElementById("formation-text");

let currentLanguage = "pt";
let currentProject = projects.gatman; // projeto inicial
const languageButton = document.querySelectorAll(".language-button");

/* ==========================
   LANGUAGE SWITCH
========================== */
function renderLanguage(language){

    subtitle.textContent = language.subTitle;

    about.forEach(item => item.textContent = language.subAbout);
    project.forEach(item => item.textContent = language.subProject);

    h2About.textContent = language.h2About;
    pAbout.textContent = language.pAbout;

    h2Project.textContent = language.h2Project;
    techTitle.textContent = language.techTitle;

    h2Formation.textContent = language.h2Formation;
    formationText.innerText = language.formationText;

    // Atualiza o projeto aberto
    renderProject(currentProject);

}

document.querySelectorAll(".language-button").forEach(button => {

    button.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "pt"
            ? "en"
            : "pt";

        updateLanguageButtons();

        renderLanguage(languages[currentLanguage]);

    });

});

function updateLanguageButtons(){

    languageButton.forEach(button => {

        button.textContent =
            currentLanguage.toUpperCase();

    });

}
   
/* ==========================
   DARK MODE
========================== */
function toggleTheme() {

    document.querySelectorAll(".theme-button").forEach(button => {

        button.addEventListener("click",()=>{

            document.body.classList.toggle("dark");
            updateThemeButtons();
        });
    });
}

function updateThemeButtons() {

    document.querySelectorAll(".theme-mobile").forEach(button => {

        button.textContent =
            document.body.classList.contains("dark")
                ? "☀️"
                : "🌙";

    });

}
/* ==========================
   HERO SHRINK
========================== */
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

/* ==========================
   SECTION PROJECT
========================== */
function renderProject(project) {

    currentProject = project;

    title.textContent = project.title;
    description.textContent = project.description[currentLanguage];

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
    const previewTitle = document.getElementById("gallery-preview-title");

let galleryTimer;

/* ==========================
   TECNOLOGIES
========================== */
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

/* ==========================
   SECTION PROJECT GALLERY
========================== */
function renderGallery(project) {

    galleryThumbs.innerHTML = "";

    preview.src = project.gallery[0].image;
    previewTitle.textContent = project.gallery[0].title[currentLanguage];
    previewText.textContent = project.gallery[0].text[currentLanguage];

    project.gallery.forEach(item => {

        const thumb = document.createElement("img");

        thumb.src = item.image;

        thumb.addEventListener("mouseenter", () => {

            clearTimeout(galleryTimer);

            preview.classList.add("fade");
            previewTitle.classList.add("fade");
            previewText.classList.add("fade");

            galleryTimer = setTimeout(() => {

                preview.src = item.image;
                previewTitle.textContent = item.title[currentLanguage];
                previewText.textContent = item.text[currentLanguage];

                preview.classList.remove("fade");
                previewTitle.classList.remove("fade");
                previewText.classList.remove("fade");

            }, 450);

        });

        galleryThumbs.appendChild(thumb);

    });

}

/* ==========================
   FADE
========================== */
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

/* ==========================
   SECTIONS FADE
========================== */
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

/* ==========================
   SETTINGS BUTTONS
========================== */

const button = document.getElementById("settings-toggle");
const settings = document.getElementById("settings-menu");

button.addEventListener("click", () => {

    settings.classList.toggle("show");

});

renderLanguage(languages[currentLanguage]);
/*Next

* Mudar idioma titles




*/