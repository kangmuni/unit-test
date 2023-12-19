const exp = require('constants');
const Calculator = require('../calculator.js');

describe('계산기', () => {
  // 각각의 테스트는 독립적으로 만드는것이 중요하다.(서로의 테스트에 영향을 끼치면 안됨)
  // new Calculator() 객체를 매번 생성해야하는 것이 적절하다.(하지만 중복적으로 코드가 생성됨)
  // 그래서, let 으로 선언하여 매 테스트마다 초기화 해줄 수 있도록 beforeEach()를 사용한다.
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('초기값 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('세팅', () => {
    calculator.set(999);

    expect(calculator.value).toBe(999);
  });

  it('초기화', () => {
    calculator.set(999);
    calculator.clear();

    expect(calculator.value).toBe(0);
  });

  it('더하기', () => {
    calculator.set(9);
    calculator.add(1);

    expect(calculator.value).toBe(10);
  });

  // Error 는 expect()에 callback 함수로 한번 감싸서 넣어주고,
  // chaining 으로 toThrow()를 사용해 어떤 에러인지 message 를 검사하면 된다.
  it('add 함수는 value가 100 보다 크면 에러를 던져야함', () => {
    expect(() => {
      calculator.add(999);
    }).toThrow('숫자는 100을 넘을 수 없어');
  });

  it('빼기', () => {
    calculator.set(1000);
    calculator.substract(500);

    expect(calculator.value).toBe(500);
  });

  it('곱하기', () => {
    calculator.set(22);
    calculator.multiply(2);

    expect(calculator.value).toBe(44);
  });

  describe('나누기', () => {
    it('0 / 0 === NaN', () => {
      calculator.divide(0);

      expect(calculator.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);

      expect(calculator.value).toBe(Infinity);
    });
    it('8 / 4 === 1', () => {
      calculator.set(8);
      calculator.divide(4);

      expect(calculator.value).toBe(2);
    });
  });
});

// 느낀점: 왜 단위테스트를 먼저 작성하고 코드 작성이 이루어져야하는지 이해되었다.
// 예상되는 버그들을 예리하게 지적하면서 코드 작성이 가능하다. 유레카!
