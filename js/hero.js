import { observeElements } from "./engines/animation-engine.js";

const newElements = [];

fetch("/data/hero.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load hero data");
    return res.json();
  })
  .then(data => {
    const section = document.querySelector(".Header-Section .text-content");

    if (!section) return;

    section.innerHTML = `
      <div class="intro-bubble fade-in">
        <h4>${data.section.intro}</h4>
      </div>
      <h1 class="fade-in">${data.section.heading[0]}</h1>
      <h1 class="Sub-heading fade-in">${data.section.heading[1]}</h1>
      <h2 class="fade-in">${data.section.subheading}</h2>
      <p class="fade-in">${data.section.description}</p>

      <div class="flex-row fade-in">
        ${data.section.buttons
          .map(
            btn => `
            <a href="${btn.href}" class="${btn.class}">
              ${btn.text} ${btn.icon ? `<img src="${btn.icon.src}" alt="${btn.icon.alt}">` : ""}
            </a>`
          )
          .join("")}
      </div>

      <div class="socials-wrap fade-in">
        <div class="flex-row">
          ${data.section.socials
            .map(s => `<img src="${s.src}" alt="${s.alt}">`)
            .join("")}
        </div>
      </div>
    `;

    section.querySelectorAll(".fade-in").forEach(el => newElements.push(el));

    observeElements(newElements);
  })
  .catch(err => console.error(err));