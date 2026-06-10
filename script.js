const themeToggle = document.querySelector('#themeToggle');
const filters = document.querySelectorAll('.filter');
const skills = document.querySelectorAll('.skills span');
const form = document.querySelector('#contactForm');
const statusText = document.querySelector('#formStatus');

if (localStorage.getItem('portfolio-theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = 'Sun';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? 'Sun' : 'Moon';
});

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    skills.forEach((skill) => {
      skill.classList.toggle('hidden', filter !== 'all' && skill.dataset.category !== filter);
    });
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name').trim();
  statusText.textContent = `Thanks, ${name}. Your message preview is ready.`;
  form.reset();
});
