function loadComponent(id, file) {
  fetch(`/components/${file}`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("navbar", "navbar.html");
