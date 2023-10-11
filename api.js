
const apiKey = '46Nr1U0MRLxCq6bMTYAnQteNRfWKqgwP';
const apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=${apiKey}`;
const div = document.querySelector("#row");
fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud');
    }
  })
  .then(data => {
    data.results.forEach(article => {
        var fragment = document.createDocumentFragment();
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var img = document.createElement("img");
        var h4 = document.createElement("h4");
        var p = document.createElement("p");
        div1.classList.add("col-lg-4","col-sm-6");
        div2.classList.add("item");
        p.textContent = article.abstract;
        p.style.color="white";
        h4.textContent= article.title;
        img.src =article.media[0]['media-metadata'][0].url;
        div2.appendChild(h4);
        div2.appendChild(img)
        div2.appendChild(p);
        div1.appendChild(div2)
        fragment.appendChild(div1)
        div.appendChild(fragment);
      console.log(article.title);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });