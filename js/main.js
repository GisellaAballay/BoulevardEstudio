// Menú hamburguesa
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggleButton.classList.toggle('open');
});

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