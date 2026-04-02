import { observeElements } from "../engines/animation-engine.js";

const newCards = [];

fetch("/data/extra-service.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load extra services data");
    return res.json();
  })
  .then(data => {

    const cardsContainer = document.getElementById("extra-services-cards");

    data.section.cards.forEach(card => {
      const elementCard = document.createElement("div");
      elementCard.className = "card fade-in card-effect";

      elementCard.innerHTML = `
        <div class="card-content">
          <h2>${card.title}</h2>
          <span>${card.subtitle}</span>
          <h3>${card.price}</h3>
          <ul>
            ${card.features.map(f => `<li>${f}</li>`).join("")}
          </ul>
        </div>
      `;

      cardsContainer.appendChild(elementCard);
      newCards.push(elementCard);
    });

    observeElements(newCards);
  })
  .catch(err => console.error(err));