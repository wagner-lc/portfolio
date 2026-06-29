//Menu-nav

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
}

//Galeria

    const preview = document.getElementById('gallery-gatman'); //Exibição principal
    const defaultPreview = preview.src; //Default da foto principal
    const thumbs = Array.from(document.querySelectorAll('gallery-thumbs')); //Imagens

    let resetTimer;
    let currentIndex = -1;

    //Reset imagem
    function resetPreview(){
        preview.classList.add('fade-out');

        setTimeout(() => {
            preview.src = defaultPreview;
            preview.classList.remove('fade-out');
            currentIndex = -1;
            
        }, 100);
    }

    //Timer
    function restartPreviewTimer(){
        clearTimeout(resetTimer);
        resetTimer = setTimeout(resetPreview, 5000);
    }

    //Mostrar imagem
    function showImage(index){
        currentIndex = (index + thumbs.length) % thumbs.length;
        preview.classList.add('fade-out');

        setTimeout(() => {
           preview.src = defaultPreview;
           preview.classList.remove('fade-out'); 
           currentIndex = -1;
        
        }, 100);

        restartPreviewTimer();
    }