import { observeElements } from "../engines/animation-engine.js";

const newCards = [];

fetch("/data/service-package.json")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to load packages data");
    return res.json();
  })
  .then((data) => {
    document.getElementById("packages-heading").textContent =
      data.section.content.heading;

    const cards = document.getElementById("packages-cards");

    data.section.cards.forEach((card) => {
      const elementCard = document.createElement("div");

      elementCard.className = `
        card mx-w-generic card-effect fade-in
        ${card.recommended ? "recommended" : ""}
      `;

      elementCard.dataset.divide = card.divide;

      elementCard.innerHTML = `
        <div class="card-content package">
          <h2>${card.title}</h2>
          <h3>${card.price}</h3>
          <p>${card.description}</p>

          <ul>
            ${card.features.map(f => `<li>${f}</li>`).join("")}
          </ul>

          <button class="
            btn w-full
            ${card.button.variant === "primary" ? "btn-primary" : ""}
          ">
            ${card.button.text}
          </button>
        </div>
      `;

      cards.appendChild(elementCard);
      newCards.push(elementCard);
    });

    observeElements(newCards);
  })
  .catch((err) => console.error(err));