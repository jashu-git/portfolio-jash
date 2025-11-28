// Dark / Light mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "#1a1a1a";
    toggle.textContent = "🌙";
  } else {
    document.body.classList.add("dark");
    document.body.style.background = "#0f111a";
    document.body.style.color = "#e4e4e4";
    toggle.textContent = "☀️";
  }
});

// Fade-in animations with GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray("section, .project-card, .skill").forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: { trigger: el, start: "top 85%" }
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
