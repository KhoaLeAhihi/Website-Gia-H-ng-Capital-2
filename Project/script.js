// ========= HEADER SCROLL EFFECT =========
// Đổi độ trong suốt header khi cuộn trang
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 80) {
    header.style.background = 'rgba(255,255,255,0.99)';
  } else {
    header.style.background = 'rgba(255,255,255,0.97)';
  }
});

// ========= ANIMATE ON SCROLL =========
// Các card xuất hiện mượt mà khi cuộn đến
const animateEls = document.querySelectorAll(
  '.why-card, .project-card, .service-card, .testi-card, .news-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = e.target.classList.contains('project-card')
        ? 'scale(1)'
        : 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

animateEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});