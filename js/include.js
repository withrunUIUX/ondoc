// /js/include.js
document.addEventListener("DOMContentLoaded", () => {
  const includeTargets = document.querySelectorAll("[data-include]");

  includeTargets.forEach(el => {
    const file = el.dataset.include;

    fetch(file)
      .then(response => response.text())
      .then(html => {
        el.innerHTML = html;
      })
      .catch(err => {
        console.error('include load error: ', file, err);
      });
  });
});