// Portfolio interactions
document.querySelectorAll('.video-placeholder').forEach((card) => {
  card.addEventListener('click', () => {
    const project = card.dataset.project || 'Project';
    alert(`${project} walkthrough video placeholder.\n\nReplace this block with your screen-recording video when it is ready.`);
  });
});

// Simple reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.section, .project, .service, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});

document.querySelectorAll('.visible').forEach(el => {
  el.style.opacity = '1';
  el.style.transform = 'translateY(0)';
});

const style = document.createElement('style');
style.textContent = '.visible{opacity:1!important;transform:translateY(0)!important;}';
document.head.appendChild(style);
