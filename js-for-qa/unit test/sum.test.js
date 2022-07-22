const sum = require('./sum');

describe('Sum' ,() => {
  it('should return 4 on 2 + 2', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
