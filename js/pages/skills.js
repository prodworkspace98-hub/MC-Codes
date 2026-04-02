import { observeElements } from "../engines/animation-engine.js";

const newCards = [];

fetch("/data/skills.json")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to load skills data");
    return res.json();
  })
  .then((data) => {
    document.getElementById("skill-heading").textContent =
      data.section.content.heading;

    const cards = document.getElementById("skill-cards");

    data.section.cards.forEach((card) => {
      const elementCard = document.createElement("div");
      elementCard.className = "card mx-w-generic fade-in";

      elementCard.dataset.divide = card.dataDivide;

      elementCard.innerHTML = `
        <div class="card-content">
          <h2>${card.title}</h2>
          <div class="tabs-wrap">
            ${card.tabs.map(tab => `<span class="tab">${tab}</span>`).join("")}
          </div>
        </div>
      `;

      cards.appendChild(elementCard);
      newCards.push(elementCard);
    });

    observeElements(newCards);
  })
  .catch((err) => console.error(err));