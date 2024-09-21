export function loadBootstrap() {
  import * as bootstrap from 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
  window.bootstrap = bootstrap;
  
  fetch("https://chouhsiang.github.io/gpki-tool-website/navbar.html") 
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((htmlContent) => {
      document.body.innerHTML += htmlContent;
      function gocodepen() {
        var path = window.location.pathname;
        var id = path.substring(path.lastIndexOf('/') + 1); 
        window.open('https://codepen.io/chouhsiang/pen/' + id, '_blank');
      }
      document.getElementById("gocodepen").addEventListener("click", gocodepen);
      function gogithub() {
        var path = window.location.pathname;
        var id = path.substring(path.lastIndexOf('/') + 1); 
        window.open('https://github.com/chouhsiang/codepen/blob/gh-pages/' + id + '.html', '_blank');  
      }
      document.getElementById("gogithub").addEventListener("click", gogithub);
    });
}
