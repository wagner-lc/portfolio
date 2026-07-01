//Menu-nav
/*
function menuNav (){
    const container = document.getElementById('menu-nav');
    
    let html = `        
        <ul>
            <li><a href="#about" title="Sobre mim">Sobre mim</a></li>
            <li><a href="#projects" title="Projetos">Projetos</a></li>
            <li><a href="#formations"></a></li>
        </ul>
        `;
    container.innerHTML = html;
}*/

//Galeria

    const preview = document.getElementById('gallery-preview'); //Exibição principal
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
    function showItem(index){
        currentIndex = (index + thumbs.length) % thumbs.length;

        preview.classList.add('fade-out');
        textPreview.classList.add('fade-out');
        console.log(currentIndex);

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

