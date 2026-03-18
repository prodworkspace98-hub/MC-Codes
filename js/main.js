import { loadComponent } from './core/component-loader.js';
import './navigation.js';


document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar", "navbar.html");
  await loadComponent("hero", "hero.html");

});