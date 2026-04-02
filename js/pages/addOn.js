import { observeElements } from "../engines/animation-engine.js";

const newCards = [];

fetch("/data/addon.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load add-on services data");
    return res.json();
  })
  .then(data => {
  
    const headingEl = document.querySelector(".add-on-table h1");
    if (headingEl) headingEl.textContent = data.section.content.heading;

    const tableContainer = document.querySelector(".add-on-table");

    data.section.groups.forEach(group => {
      const groupDiv = document.createElement("div");
      groupDiv.className = "w-full";

      group.rows.forEach(row => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";

        rowDiv.innerHTML = `
          <div class="col">${row.service}</div>
          <div class="col">${row.price}</div>
        `;

        groupDiv.appendChild(rowDiv);
      });

      tableContainer.appendChild(groupDiv);
    });

   
    observeElements(document.querySelectorAll(".add-on-table .row"));
  })
  .catch(err => console.error(err));