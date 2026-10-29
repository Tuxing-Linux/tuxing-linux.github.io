//as tags viram bjetos em js

// cria constantes para as classes, usando o queryselector que busca no html as seguintes classes
const slides = document.querySelector('.slides'); 
const images = document.querySelectorAll('.slides img');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

//criar um index, ele será usado para poder fazer a contagem de mexer no carrosel
let index = 0;//para defini-la usamos let, ele nao exige definir o tipo de dado explicitamente

//criamos uma funcao que mostra o carrosel
function showSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}


//cria um evento(ação) definida como click, que caso seja clicado, ele pegara o index e somara a um, e usara images(que agloba ambas as imagens do carrosel).length para mudar a posição deles
btnRight.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showSlide();//chama a funcao de atualizar/mostrar o carrosel para a nova imagem
});

//o mesmo vale para esse bloco mas aqui ele volta uma imagem invés de avançar uma, por isso o index - 1
btnLeft.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showSlide();
});


