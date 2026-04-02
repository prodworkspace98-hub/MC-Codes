fetch("/data/navigation.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load navbar data");
    return res.json();
  })
  .then(data => {
    const header = document.querySelector("header");
    if (!header) return;

    
    header.innerHTML = `
      <a href="${data.section.logo.href}">
        <img src="${data.section.logo.src}" alt="${data.section.logo.alt}">
      </a>
      <nav>
        <input type="checkbox" name="tab-Menu" id="tab-Menu" hidden/>
        <label for="tab-Menu" class="Menu-icon"><span></span></label>
        <ul class="mb-nav">
          ${data.section.menu
            .map(item => `<li><a href="${item.href}">${item.text}</a></li>`)
            .join("")}
        </ul>
      </nav>
    `;
  })
  .catch(err => console.error(err));