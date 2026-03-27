import { LoadComponent } from './core/component-loader.js';
import { initAnimations } from './engines/animation-engine.js';

document.addEventListener("DOMContentLoaded", async () => {

  const components = [
    ["navbar", "navbar.html"],
    ["hero", "hero.html"],
    ["about", "about/about-section.html"],
    ["services", "services/services-section.html"],
    ["skills", "skills/skills.html"],
    ["packages", "packages/service-packages.html"],
    ["extra", "services/extra-service.html"],
    ["addon", "services/addon-service.html"],
    ["contact", "contact/contact.html"],
    ["footer", "footer.html"]
  ];

  await Promise.all(
    components.map(([id, file]) => LoadComponent(id, file))
  );

  
  initAnimations();

  
  loadPageScripts();
});

function loadPageScripts() {
  if (document.getElementById('about-title')) {
    import('./pages/about.js');
  }

  if (document.getElementById('services-container')) {
    import('./pages/services.js');
  }
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
