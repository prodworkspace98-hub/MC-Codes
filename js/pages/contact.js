import { observeElements } from "../engines/animation-engine.js";

const newCards = [];

fetch("/data/contact.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load contact data");
    return res.json();
  })
  .then(data => {
    
    const headingEl = document.querySelector(".container .heading");
    if (headingEl) headingEl.textContent = data.section.content.heading;

    const cardsContainer = document.querySelector(".container .contact-cards");

  
    data.section.cards.forEach(card => {
      const elementCard = document.createElement("div");
      elementCard.className = "card mx-w-generic w-full fade-in";
      elementCard.dataset.divide = 2;

      elementCard.innerHTML = `
        <div class="card-content flex-row">
          <span class="icon-badge">
            <img src="${card.icon.src}" alt="${card.icon.alt}">
          </span>
          <div>
            <h2>${card.title}</h2>
            <p>${card.text}</p>
          </div>
        </div>
      `;

      cardsContainer.appendChild(elementCard);
      newCards.push(elementCard);
    });

    if (data.section.cta) {
      const ctaContainer = document.createElement("div");
      ctaContainer.className = "center mY-generic";
      ctaContainer.dataset.space = 5;

      ctaContainer.innerHTML = `
        <a href="${data.section.cta.href}" class="${data.section.cta.class}">
          ${data.section.cta.text}
        </a>
      `;

      cardsContainer.parentNode.appendChild(ctaContainer);
    }

    observeElements(newCards);
  })
  .catch(err => console.error(err));