const data = [
    { title: "Shampoo A", source: "Mercado Libre" },
    { title: "Shampoo B", source: "Amazon" },
    { title: "Gel de Ducha", source: "Mercado Libre" },
    { title: "Acondicionador", source: "Amazon" },
    // Aquí debes tener tu conjunto de datos con las ofertas recopiladas
  ];
  
  const searchInput = document.getElementById('searchInput');
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
        resultItem.innerText = `${result.title} - ${result.source}`;
        resultsList.appendChild(resultItem);
      });
    }
  }
  
  function search() {
    const query = searchInput.value.toLowerCase();
    const filteredResults = data.filter((result) => result.title.toLowerCase().includes(query));
    displayResults(filteredResults);
  }
  
  searchInput.addEventListener('input', search);
