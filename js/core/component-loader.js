export async function loadComponent(id, file) {
  try {
    const element = document.getElementById(id);

    if (!element) return;

    const res = await fetch(`/components/${file}`);

    if (!res.ok) {
      throw new Error(`Component not found: ${file}`);
    }

    const html = await res.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}