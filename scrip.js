const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('resultsContainer');

function displayResults(results) {
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    const noResultsItem = document.createElement('div');
    noResultsItem.innerText = 'No se encontraron resultados.';
    resultsContainer.appendChild(noResultsItem);
  } else {
    results.forEach((result) => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('resultItem');

      const img = document.createElement('img');
      img.src = result.image; // Asigna la URL de la imagen del producto

      const title = document.createElement('h3');
      title.innerText = result.title;

      const price = document.createElement('p');
      price.innerText = `Precio: ${result.price}`;

      resultItem.appendChild(img);
      resultItem.appendChild(title);
      resultItem.appendChild(price);

      resultsContainer.appendChild(resultItem);
    });
  }
}

function searchAliExpress(query) {
  // Ejemplo de búsqueda ficticia en AliExpress con resultados de imágenes
  const results = [
    { https://www.amazon.com.mx/Dell-Port%C3%A1til-empresarial-Latitude-5490/dp/B08WYCV1YG/ref=sr_1_2?adgrpid=118930822068&hvadid=590662567157&hvdev=c&hvlocphy=1010079&hvnetw=g&hvqmt=e&hvrand=2961888084698976224&hvtargid=kwd-374729722203&hydadcr=9246_13553560&keywords=ofertas+en+laptop&qid=1684264076&sr=8-2 'https://m.media-amazon.com/images/I/71NgJLkErQL._AC_SX355_.jpg', Dell Portátil empresarial Latitude 5490  'laptop', price: '$4,199' },
    { image: 'ruta_imagen_2.jpg', title: 'Producto 2', price: '$15' },
    { image: 'ruta_imagen_3.jpg', title: 'Producto 3', price: '$20' },
    // ...
  ];

  displayResults(results);
}

function handleSearch() {
  const query = searchInput.value;
  searchAliExpress(query);
}

searchButton.addEventListener('click', handleSearch);
