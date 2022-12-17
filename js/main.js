function tocaSom(idElementoAudio) {
    const element = document.querySelector(idElementoAudio);

    if(element === null || element.localName != 'audio') {
        console.log('Elemento não encontrado ou Seletor Inválido');
    } else {
        element.play();
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    let instrumento = tecla.classList[1];

    const idElementoAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        tocaSom("#som_" + instrumento);
    };
    
    tecla.onkeydown = function(event) {
        if(event.code == 'Space' || event.code == 'Enter')        
            tecla.classList.add('ativa');
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}