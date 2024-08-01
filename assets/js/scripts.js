// Selección de elementos
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const menuDiv = document.querySelector(".menu-div");
const prevButtonMob = document.getElementById("prev-mobile");
const nextButtonMob = document.getElementById("next-mobile");

// Determinar si la vista es móvil o de escritorio
const isMobile = window.innerWidth <= 400;

// URLs de las imágenes de fondo correspondientes a cada slide
const backgroundImagesDesktop = [
  "url(images/desktop-image-hero-1.jpg)",
  "url(images/desktop-image-hero-2.jpg)",
  "url(images/desktop-image-hero-3.jpg)",
];

const backgroundImagesMobile = [
  "url(images/mobile-image-hero-1.jpg)",
  "url(images/mobile-image-hero-2.jpg)",
  "url(images/mobile-image-hero-3.jpg)",
];

// Seleccionar el conjunto de imágenes adecuado según el tamaño de la pantalla
const backgroundImages = isMobile
  ? backgroundImagesMobile
  : backgroundImagesDesktop;

let currentSlide = 0;

// Función para mostrar el slide actual y cambiar el fondo de la clase menu-div
const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  menuDiv.style.backgroundImage = backgroundImages[index];
};

// Event listeners para los botones prev y next en vista de escritorio
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

// Event listeners para los botones prev y next en vista móvil
prevButtonMob.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

nextButtonMob.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

// Muestra el primer slide al cargar la página
showSlide(currentSlide);

// Añadir un evento de redimensionamiento para actualizar el backgroundImage
window.addEventListener("resize", () => {
  // Redefinir si es móvil o no
  const isMobile = window.innerWidth <= 400;
  // Actualizar las imágenes de fondo basadas en el nuevo tamaño
  const backgroundImages = isMobile
    ? backgroundImagesMobile
    : backgroundImagesDesktop;
  // Actualizar la imagen de fondo actual del slide activo
  menuDiv.style.backgroundImage = backgroundImages[currentSlide];
});

// Selecciona todos los enlaces "shop-now" en todos los slides
const shopNowLinks = document.querySelectorAll(".shop-now a");

shopNowLinks.forEach((link) => {
  link.addEventListener("mouseover", function () {
    const img = this.querySelector("img");
    if (img) {
      img.src = "images/icon-arrow-hover.svg"; // Cambiar a la imagen hover
    }
    this.style.color = "hsl(0, 0%, 63%)"; // Cambiar el color del texto (span)
  });

  link.addEventListener("mouseout", function () {
    const img = this.querySelector("img");
    if (img) {
      img.src = "images/icon-arrow.svg"; // Volver a la imagen original
    }
    this.style.color = "hsl(0, 0%, 0%)"; // Volver al color original del texto (span)
  });
});

// Selección de elementos
const whiteMenu = document.getElementById("white-menu");
const iconHamburger = document.getElementById("icon-hamburger");
const iconClose = document.getElementById("icon-close");

// Función para mostrar el menú
const showMenu = () => {
  whiteMenu.classList.remove("hidden");
};

// Función para ocultar el menú
const hideMenu = () => {
  whiteMenu.classList.add("hidden");
};

// Event Listeners para los iconos
iconHamburger.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
  showMenu();
});

iconClose.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
  hideMenu();
});
