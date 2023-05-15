const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsList = document.getElementById('resultsList');

function displayResults(results) {
  resultsList.innerHTML = '';

  if (results.length === 0) {
    const noResultsItem = document.createElement('li');
    noResultsItem.innerText = 'No se encontraron resultados.';
    resultsList.appendChild(noResultsItem);
  } else {
    results.forEach((result) => {
      const resultItem = document.createElement('li');
      resultItem.classList.add('resultItem');
      resultItem.innerText = result;
      resultsList.appendChild(resultItem);
    });
  }
}

function searchAliExpress(query) {
  // Aquí debes implementar la lógica para buscar en AliExpress
  // Puedes utilizar técnicas de web scraping o la API de AliExpress (si está disponible)

  // Ejemplo de búsqueda ficticia en AliExpress
  const results = [
    'Oferta 1 en AliExpress',
    'Oferta 2 en AliExpress',
    'Oferta 3 en AliExpress',
    // ...
  ];

  displayResults(results);
}

function handleSearch() {
  const query = searchInput.value;
  searchAliExpress(query);
}

searchButton.addEventListener('click', handleSearch);
