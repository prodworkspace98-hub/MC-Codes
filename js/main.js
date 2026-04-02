import { LoadComponent } from "./core/component-loader.js";
import { observeElements } from "./engines/animation-engine.js";

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
    ["footer", "footer.html"],
  ];

  await Promise.all(components.map(([id, file]) => LoadComponent(id, file)));

  const staticElements = document.querySelectorAll(".fade-in");
  observeElements(staticElements);

  loadPageScripts();
});

function loadPageScripts() {
  if (document.getElementById("navbar")) {
    import("./navigation.js");
  }

  if (document.getElementById("hero")) {
    import("./hero.js");
  }

  if (document.getElementById("about-title")) {
    import("./pages/about.js");
  }

  if (document.getElementById("services")) {
    import("./pages/services.js");
  }

  if (document.getElementById("skills")) {
    import("./pages/skills.js");
  }

  if (document.getElementById("skills")) {
    import("./pages/service-package.js");
  }
  if (document.getElementById("extra")) {
    import("./pages/extra-service.js");
  }

  if (document.getElementById("addon")) {
    import("./pages/addOn.js");
  }

  if (document.getElementById("contact")) {
    import("./pages/contact.js");
  }

  if (document.getElementById("footer")) {
    import("./footer.js");
  }
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
