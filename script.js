// ============================================
//   SHREE JEE GUPTA — PORTFOLIO JAVASCRIPT
//   script.js
// ============================================

// ── Scroll Fade-Up Animation ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Stagger Delay for Cards ──
document.querySelectorAll(
  '.skills-grid .skill-card, .projects-grid .project-card, .cert-grid .cert-card'
).forEach((el, i) => {
  el.style.transitionDelay = (i * 0.07) + 's';
});

// ── Contact Form Submit ──
function handleFormSubmit() {
  alert('Thank you! Please email me directly at shreejee7906986152@gmail.com');
}
