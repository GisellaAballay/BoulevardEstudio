// Menú hamburguesa

const toggleBtn = document.getElementById("toggleButton");
    const navList = document.getElementById("navList");

    toggleBtn.addEventListener("click", () => {
      navList.classList.toggle("show");
      toggleBtn.classList.toggle("active");
    })

// Imagen de fondo dinámica
const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
  const image = submenu.dataset.img;
  const megaMenu = submenu.querySelector('.mega-menu');
  
  submenu.addEventListener('mouseenter', () => {
    megaMenu.style.backgroundImage = `url(${image})`;
  });

  submenu.addEventListener('mouseleave', () => {
    megaMenu.style.backgroundImage = '';
  });
});

 