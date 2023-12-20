const ProductService = require('../product_service');
const StubProductClient = require('./stub_clent_product');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient()); // Arragne, Given
  });

  it('should return array', async () => {
    const result = await productService.fetchAvailableItems(); // Act, When

    expect(result.length).toBe(2); // Assert, Then
    expect(result).toEqual([
      { item: '🍞', available: true },
      { item: '🥨', available: true },
    ]);
  });
});
