fetch("/data/footer.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load footer data");
    return res.json();
  })
  .then(data => {
    const footer = document.querySelector(".footer");

    
    const brandDiv = footer.querySelector(".footer__brand");
    if (brandDiv) {
      brandDiv.innerHTML = `
        <h1 class="footer__title">${data.section.brand.title}</h1>
        <p class="footer__tagline">${data.section.brand.tagline}</p>
      `;
    }

    const linksDiv = footer.querySelector(".footer__links .flex-row");
    if (linksDiv) {
      linksDiv.innerHTML = data.section.links
        .map(link => `<img src="${link.icon}" alt="${link.alt}">`)
        .join("");
    }

    
    const bottomDiv = footer.querySelector(".footer__bottom p.center");
    if (bottomDiv) {
      bottomDiv.textContent = data.section.copyright;
    }
  })
  .catch(err => console.error(err));