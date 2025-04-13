// Menú hamburguesa

const toggleBtn = document.getElementById("toggleButton");
    const navList = document.getElementById("navList");

    toggleBtn.addEventListener("click", () => {
      navList.classList.toggle("show");
      toggleBtn.classList.toggle("active");
    })

// Imagen de fondo dinámica
const menuItems = document.querySelectorAll('.menu-item');
const background = document.querySelector('.menu-background');

menuItems.forEach(item => {
  const image = item.getAttribute('data-img');
  
  item.addEventListener('mouseenter', () => {
    background.style.backgroundImage = `url(${image})`;
    background.style.opacity = 0.4;
  });

  item.addEventListener('mouseleave', () => {
    background.style.opacity = 0;
  });
});