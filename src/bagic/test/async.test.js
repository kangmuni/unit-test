const fetchProduct = require('../async.js');

describe('비동기', () => {
  // done
  // then() 방식으로 체크하려면 it의 인자로 들어오는 doneCallback 을 호출해주어야한다.
  //   it('async-done', (done) => {
  //     fetchProduct().then((result) => {
  //       expect(result).toEqual({ item: 'Meat', price: '99900' });
  //       done();
  //     });
  //   });

  // return
  // 실패하는 케이스의 경우 done()의 실행시간이 5초를 넘아가기 때문에,
  // Promise 자체를 return 하면 같은 효과를 누릴 수 있다.
  it('async return', () => {
    return fetchProduct().then((result) => {
      expect(result).toEqual({ item: 'Meat', price: 99900 });
    });
  });

  // async - await
  it('async await', async () => {
    const result = await fetchProduct();
    expect(result).toEqual({ item: 'Meat', price: 99900 });
  });

  // resolve - rejects
  it('async resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Meat',
      price: 99900,
    });
  });

  it('async rejects', () => {
    return expect(fetchProduct('error')).rejects.toBe('network Err');
  });
});
