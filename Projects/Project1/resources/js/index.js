/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */


// Scroll to TOP section
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// create the articles for the Projects sections 
getPosts().then((data) => {
    let projectsTabsParent = document.querySelector(".articles-container");
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
})


// banner carousel with logos.
$(document).ready(function(){
    $('.logo-carousel').slick({
    arrows: false,
    infinite: true,   // Permite la navegación infinita
    slidesToShow: 2,   // Muestra 4 logos a la vez
    autoplay: true,   // Inicia la reproducción automática
    autoplaySpeed: 0,   // Velocidad de reproducción automática en milisegundos
    cssEase: "linear",   // Establece el efecto de movimiento continuo
    speed: 4000,   // Velocidad del movimiento en milisegundos
    centerMode: true,
    draggable: true,
    pauseOnHover: false,
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