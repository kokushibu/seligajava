function tocasom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeteclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeteclas.length){
    const efeito = listaDeteclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeteclas[contador].onclick = function(){
        tocasom (idAudio)
    }
    contador = contador + 1
    console.log(contador);

    listaDeteclas.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            listaDeteclas.classList.add('ativa')
        }
    }
    listaDeteclas.onkeyup = function(){
        listaDeteclas.classList.remove('ativa')
    }
}