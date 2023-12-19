function fetchProducts(error) {
  if (error === 'error') {
    return Promise.reject('network Err');
  }
  return Promise.resolve({ item: 'Meat', price: 99900 });
}

module.exports = fetchProducts;
