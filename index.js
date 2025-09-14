// Mobil menyu toggle
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Link bosilganda menyuni yopish (mobil)
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Back to top button
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.className = "back-to-top";
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) topBtn.style.display = "block";
  else topBtn.style.display = "none";
});

topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Contact form alert
const form = document.querySelector('form');
if(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Rahmat! Xabaringiz qabul qilindi");
    form.reset();
  });
}