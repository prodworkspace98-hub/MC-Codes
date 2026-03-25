import { loadComponent } from "../core/component-loader.js";
import { loadServices } from "../features/services-engine.js";

async function init() {
  await loadComponent("navbar", "layout/navbar.html");
  await loadComponent("services-hero", "services/services-hero.html");
  await loadComponent("services-list", "services/services-list.html");

  loadServices(); // populate data
}

init();