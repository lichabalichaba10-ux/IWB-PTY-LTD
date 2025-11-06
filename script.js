
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');


menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    navMenu.classList.add('open');
  } else {
    navMenu.classList.remove('open');
  }
});

