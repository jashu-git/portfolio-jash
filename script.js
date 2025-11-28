// Dark / Light Mode Toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Premium Section Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .card, .project-card, .skill").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
