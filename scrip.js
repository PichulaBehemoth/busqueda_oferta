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
