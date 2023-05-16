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
TaobaoClient client = new DefaultTaobaoClient(url, appkey, secret);
AliexpressSolutionProductListGetRequest req = new AliexpressSolutionProductListGetRequest();
AliexpressSolutionProductListGetRequest.ItemListQuery obj1 = new AliexpressSolutionProductListGetRequest.ItemListQuery();
obj1.setCurrentPage(2L);
obj1.setExceptedProductIds(new Long[] { 32962333569,32813963253 };
);
obj1.setOffLineTime(7L);
obj1.setOwnerMemberId("aliqatest01");
obj1.setPageSize(30L);
obj1.setProductId(123L);
obj1.setProductStatusType("onSelling");
obj1.setSubject("knew odd");
obj1.setWsDisplay("expire_offline");
obj1.setHaveNationalQuote("n");
obj1.setGroupId(1234L);
obj1.setGmtCreateStart(StringUtils.parseDateTime("2012-01-01 12:13:14"));
obj1.setGmtCreateEnd(StringUtils.parseDateTime("2012-01-01 12:13:14"));
obj1.setGmtModifiedStart(StringUtils.parseDateTime("2012-01-01 12:13:14"));
obj1.setGmtModifiedEnd(StringUtils.parseDateTime("2012-01-01 12:13:14"));
obj1.setSkuCode("123ABC");
req.setAeopAEProductListQuery(obj1);
AliexpressSolutionProductListGetResponse rsp = client.execute(req, sessionKey);
System.out.println(rsp.getBody());

  displayResults(results);
}

function handleSearch() {
  const query = searchInput.value;
  searchAliExpress(query);
}

searchButton.addEventListener('click', handleSearch);
