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
    
    { image: 'data:image/jpeg;base64,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',  title: 'Shampoo', price:'$158,00' },
    { image: 'https://www.garnier.com.mx/-/media/project/loreal/brand-sites/garnier/usa/mx/es-mx/prd-haircare/fructis-crece-fuerte/7509552909685_1.png?rev=38fc040c6199468e965561ffa4205262?as=1&w=320&hash=221DF25E67DEEFF45EE47FCF4AD5977A', title: 'Acondicionador', price: '$52,50' },
    { image: 'https://media.istockphoto.com/id/863884556/es/vector/envases-cosm%C3%A9ticos-champ%C3%BA-pl%C3%A1stico-realista-o-plantilla-de-botella-de-gel-de-ducha-con.jpg?s=612x612&w=0&k=20&c=NPjc-N5ejooYe1cMgao7BJbmJko_mhoG0DaNLi-c6FA=', title: 'Shampoo', price: '$80.70' },
    // ...
  ];

  displayResults(results);
}

function handleSearch() {
  const query = searchInput.value;
  searchAliExpress(query);
}

searchButton.addEventListener('click', handleSearch);
