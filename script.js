/* ========== DARK MODE TOGGLE ========== */
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* ========== PARALLAX BACKGROUND ========== */
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 30;
  const y = (e.clientY / window.innerHeight) * 30;

  document.querySelector(".parallax-bg").style.transform =
    `translate(${x}px, ${y}px)`;
});

/* ========== GSAP ANIMATIONS ========== */
gsap.registerPlugin(ScrollTrigger);

// Fade-up animation for each section
gsap.utils.toArray("section").forEach((sec) => {
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

// Projects and skills stagger animations
gsap.utils.toArray(".project-card, .skill").forEach((element) => {
  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.1,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    }
  });
});

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();
