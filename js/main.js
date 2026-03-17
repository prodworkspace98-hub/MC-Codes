import './navigation.js';
import './promo-engine.js';
import './form-handler.js';
import './services-engine.js';
import './testimonials-engine.js';

function loadComponent(id, file) {
  fetch(`/components/${file}`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("navbar", "navbar.html");
