var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";
document.body.appendChild(script);

fetch("https://chouhsiang.github.io/gpki-tool-website/navbar.html") 
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((htmlContent) => {
    document.body.innerHTML += htmlContent;
  });
