//efeito escrever na tela
function efeitoEscrever(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
       setTimeout(() => {
           elemento.innerHTML += letra
        }, 75 * i);
    });
}

const titulo  = document.getElementById('textH');
onload = efeitoEscrever(titulo);

//efeito Parallax imagem 
$('.parallax-window').parallax({imageSrc: 'img/prog1.jpg'});

//filtro galeria
$(function (){
    $('.list').click(function(){
        const filtro = $(this).attr('data-filter');
        if(filtro == 'all'){
            $('.itemBox').show();
        }else {
            $('.itemBox').not('.'+filtro).hide('1000');
            $('.itemBox').filter('.'+filtro,).show('1000');
        }
    });

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});

//galeria de Projetos
var modal = document.getElementById("depModal");
var img = document.querySelectorAll(".depImg");
var modalImg = document.getElementById("modal");
var legenda = document.getElementById("caption");
let srcImg="";

for(let i =0; i<img.length;i++){
    img[i].addEventListener('click',function(){
        modal.style.display = "block";
        srcImg = img[i].getAttribute('src');
        modalImg.setAttribute('src', srcImg);
        legenda.innerHTML = this.alt;
    });  
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

