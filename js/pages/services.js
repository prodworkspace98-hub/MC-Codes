import { observeElements } from "../engines/animation-engine.js";

const newCards = [];

fetch("/data/services.json")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to load about data");
    return res.json();
  })
  .then((data) => {
    document.getElementById("service-heading").textContent =
      data.section.content.heading;
    document.getElementById("subtext").textContent =
      data.section.content.subtext;

    const cards = document.getElementById("cards");

    data.section.cards.forEach((card) => {
      const elementCard = document.createElement("div");
      elementCard.className = "card card-effect fade-in";

      elementCard.innerHTML = `
    <div class="card-content">
      <span class="icon">
        <img src="${card.icon.src}" alt="${card.icon.alt}" loading="${card.icon.loading}">
      </span>
      <h2>${card.title}</h2>
      <ul>
        ${card.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;

      cards.appendChild(elementCard);

      newCards.push(elementCard);
    });
    observeElements(newCards);
  })
  .catch((err) => console.error(err));
