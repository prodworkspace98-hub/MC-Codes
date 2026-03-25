import { loadComponent } from "./core/component-loader.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar", "navbar.html");
  await loadComponent("hero", "hero.html");
  await loadComponent("about", "about/about-section.html");
  await loadComponent("services", "services/services-section.html");
  await loadComponent("Skills", "Skills and Technologies/Skills and Tech.html");
  await loadComponent("packages", "packages/service packages.html");
  await loadComponent("Extra", "services/Extra service.html");
  await loadComponent("AddOn", "services/AddOn service.html");
});
 