/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

 getPosts().then((data) => {
    let projectsTabsParent = document.querySelector("#articles");
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
})


$(document).ready(function(){
    $('.logo-carousel').slick({
    infinite: true,   // Permite la navegación infinita
    slidesToShow: 4,   // Muestra 4 logos a la vez
    autoplay: true,   // Inicia la reproducción automática
    autoplaySpeed: 0,   // Velocidad de reproducción automática en milisegundos
    cssEase: "linear",   // Establece el efecto de movimiento continuo
    speed: 4000,   // Velocidad del movimiento en milisegundos
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2   // Cambia a mostrar 1 logo en dispositivos más pequeños
          }
        }
    ]
    });
  });