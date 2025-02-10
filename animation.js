let button = document.getElementById("revel"); 
let modal = document.querySelector(".audio"); 
let closeModal1 = document.getElementById("close");
document.querySelectorAll(".item-menu").forEach(item => {
  const skate = item.querySelector(".skate");  

  item.addEventListener("mouseenter", () => {
    if (skate) {
      skate.style.transition = "transform 0.5s ease-in-out";
      skate.style.transform = "rotate(360deg)";
    }
  });

  item.addEventListener("mouseleave", () => {
    if (skate) {
      skate.style.transition = "transform 0.5s ease-in-out";
      skate.style.transform = "rotate(0deg)";
    }
  });
});

  function trocar(novaImg, id) {
    console.log('Imagem sendo trocada para: ' + novaImg);
    let figura = document.getElementById(id);
    figura.src = novaImg;
  }
button.addEventListener("click", function() {
    modal.style.display = "block";
});
closeModal1.addEventListener("click", function() {
    modal.style.display = "none";
});
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const closeMenuBtn = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('open');
});

closeMenuBtn.addEventListener('click', () => {
    navList.classList.remove('open');
});
