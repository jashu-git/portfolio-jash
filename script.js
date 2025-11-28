// Dark / Light mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  const body = document.body;
  if(body.classList.contains("dark")){
    gsap.to(body,{backgroundColor:"#f5f5f5", color:"#1a1a1a", duration:0.6});
    body.classList.remove("dark");
    toggle.textContent="🌙";
  }else{
    gsap.to(body,{backgroundColor:"#0f111a", color:"#e4e4e4", duration:0.6});
    body.classList.add("dark");
    toggle.textContent="☀️";
  }
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray("section, .project-card, .skill").forEach(el=>{
  gsap.from(el,{opacity:0,y:40,scale:0.97,duration:1,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 85%"}});
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
