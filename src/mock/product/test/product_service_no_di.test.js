const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');

// 어떤 함수를 호출했을때 어떤 데이터를 받아올수 있는지 mock으로 연결해줌 (우리가 원하는 로직만 아주 날카롭게 테스트 할 수 있음)
jest.mock('../product_client');

describe('ProductService', () => {
  // 데이터
  const fetchItems = jest.fn(async () => {
    return [
      { item: '🍎', available: true },
      { item: '🍟', available: false },
      { item: '🍍', available: true },
    ];
  });

  // 연결
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should return array', async () => {
    const result = await productService.fetchAvailableItems();
    expect(result.length).toBe(2);
    expect(result).toEqual([
      { item: '🍎', available: true },
      { item: '🍍', available: true },
    ]);
  });
});
