const check = require('../check');

describe('mock', () => {
  let onSuccess;
  let onFail;

  // 함수를 만들지않아도 mock함수를 이용해 test 가능
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('onSucess and onFail should be call on predicate', () => {
    check(() => true, onSuccess, onFail);

    expect(onSuccess).toHaveReturnedTimes(1);
    expect(onSuccess).toHaveBeenCalledWith('yes');
    expect(onFail).toHaveReturnedTimes(0);
  });

  it('should be call onFail', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledWith('no');
    expect(onFail).toHaveReturnedTimes(1);
    expect(onSuccess).toHaveReturnedTimes(0);
  });
});
