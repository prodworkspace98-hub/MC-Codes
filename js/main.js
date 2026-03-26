import { loadComponent } from "./core/component-loader.js";

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent("navbar", "navbar.html"),
    loadComponent("hero", "hero.html"),
    loadComponent("about", "about/about-section.html"),
    loadComponent("services", "services/services-section.html"),
    loadComponent("Skills", "Skills and Technologies/Skills and Tech.html"),
    loadComponent("packages", "packages/service packages.html"),
    loadComponent("Extra", "services/Extra service.html"),
    loadComponent("AddOn", "services/AddOn service.html"),
    loadComponent("Contact", "Contact details/Contact.html"),
    loadComponent("footer", "footer.html"),
  ]);
  initAnimations();
});

function initAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});