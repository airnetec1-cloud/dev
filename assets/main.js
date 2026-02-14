const links = document.querySelectorAll('.nav-links a');
const path = window.location.pathname.split('/').pop() || 'index.html';
links.forEach(link => {
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
});
