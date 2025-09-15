document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('#category-bar button');
  const sections = document.querySelectorAll('.menu-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Quitar clase activa de todos los botones
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      sections.forEach(section => {
        if (category === 'Todos' || section.querySelector('h2').textContent === category) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});