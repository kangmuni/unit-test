class ProductClient {
  fetchItems() {
    return fetch('https://example.com/login/id+pw').then((response) =>
      response.json()
    );
  }
}

module.exports = ProductClient;
