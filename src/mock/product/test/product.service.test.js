const ProductService = require('../product_service');
const StubProductClient = require('./stub_clent_product');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('should return array', async () => {
    const result = await productService.fetchAvailableItems();
    expect(result.length).toBe(2);
    expect(result).toEqual([
      { item: '🍞', available: true },
      { item: '🥨', available: true },
    ]);
  });
});
