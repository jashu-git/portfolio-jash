// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Fade-up for sections
gsap.utils.toArray("section").forEach(sec => {
  gsap.to(sec, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    }
  });
});

// Project cards stagger
gsap.utils.toArray(".project-card, .skill").forEach(el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.1,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    }
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
