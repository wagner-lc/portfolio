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