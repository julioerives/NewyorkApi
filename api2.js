const apiKey = '46Nr1U0MRLxCq6bMTYAnQteNRfWKqgwP';
const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`;
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
    data.results.books.forEach(article => {
        var fragment = document.createDocumentFragment();
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var img = document.createElement("img");
        var h4 = document.createElement("h4");
        var p = document.createElement("p");
        var p2 = document.createElement("p");
        div1.classList.add("col-lg-4","col-sm-6");
        div2.classList.add("item");
        p.textContent = `Rango : ${article.rank}`;
        p.style.color="white";
        h4.textContent= `Titulo: ${article.title}`;
        img.src =article.book_image;
        p2.textContent =`Descripcion : ${article.description}`;
        p2.style.color="white";
        div2.appendChild(h4);
        div2.appendChild(img);
        div2.appendChild(p);
        div2.appendChild(p2);
        div1.appendChild(div2)
        fragment.appendChild(div1)
        div.appendChild(fragment);
      console.log(article.title);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });