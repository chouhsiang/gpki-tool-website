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
