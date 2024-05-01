//----------- Mostrar el Menu Izq
const header = document.querySelector("header");
const menuIcon = header.firstElementChild;
const menu = document.querySelector(".leftMenu");
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
});

//------------ Cerrar el Menu Izq
const button = document.getElementsByTagName("button");
const menuButton = button[0];
menuButton.addEventListener('click', () => {
    menu.classList.toggle("showMenu");
});

//------- Imagenes con hover
const product = document.querySelectorAll(".hover");    
product.forEach(elem => {
        elem.addEventListener("mouseenter", () => {
        elem.style.opacity = ".5";  
        })
        elem.addEventListener("mouseleave", () => {
        elem.style.opacity = "1";
        })
});

//-------- Hover en personajes y modal
const hoverSearch = document.querySelectorAll(".imgChara");    
hoverSearch.forEach(elem => {
        elem.addEventListener("mouseenter", () => {
        elem.style.borderRadius = "30px";
        elem.style.opacity = ".6"; 
        })
        elem.addEventListener("mouseleave", () => {
        elem.style.borderRadius = "0px";
        elem.style.opacity = "1"; 
        })
});

const btn = document.querySelectorAll("#myBtn");
btn.forEach((elem, index) => {
  elem.addEventListener("click", (e) => {
    const modal = document.querySelectorAll("#myModal")[index];
    const span = document.getElementsByClassName("close")[index];    

    modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    })
});

//----------Forma hover o activos
const formaText = document.querySelectorAll(".formText"); 
formaText.forEach(elem => {
  elem.addEventListener("mouseenter", () => {
  event.target.style.backgroundColor = "#EAB9B2";
  })
  elem.addEventListener("mouseleave", () => {
  event.target.style.backgroundColor = "#ffffff";
  })
});