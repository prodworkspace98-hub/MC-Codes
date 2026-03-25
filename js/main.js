import { loadComponent } from "./core/component-loader.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar", "navbar.html");
  await loadComponent("hero", "hero.html");
  await loadComponent("about", "about/about-section.html");
  await loadComponent("services", "services/services-section.html");
});
 