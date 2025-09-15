document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('#category-bar button');
  const sections = document.querySelectorAll('.menu-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category').toLowerCase().trim();
      sections.forEach(section => {
        const sectionCategory = section.querySelector('h2').textContent.toLowerCase().trim();
        if (category === 'todos' || sectionCategory === category) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});