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
    { image:  'https://m.media-amazon.com/images/I/71NgJLkErQL._AC_SX355_.jpg', Dell Portátil empresarial Latitude 5490  'laptop', price: '$4,199' },
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
