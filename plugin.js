document.addEventListener('DOMContentLoaded', () => {
  fetch("https://chouhsiang.github.io/gpki-tool-website/navbar.html") 
    .then((response) => {
      return response.text();
    })
    .then((htmlContent) => {
      document.body.insertAdjacentHTML('beforeend', htmlContent);
    });
});
