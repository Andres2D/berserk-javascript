const { 
  sumTwoNumbers,
  getWeekDaysPhase1,
  getWeekDaysPhase2
} = require('./operations');
const { days, dias } = require('./constants');

describe('Operations' ,() => {
  
  it('should return 4 on 2 + 2', () => {
    expect(sumTwoNumbers(2, 2)).toBe(4);
  });

  it('should return NaN', () => {
    expect(sumTwoNumbers(2, 'name')).toBeNaN();
  });

  it('should return the week days', () => {
    expect(getWeekDaysPhase1()).toBe(days);
  });

  it('should content seven items', () => {
    expect(getWeekDaysPhase1()).toHaveLength(7);
  });

  it('should return the week days in english', () => {
    expect(getWeekDaysPhase2('en')).toBe(days);
  });
  
  it('should return the week days in spanish', () => {
    expect(getWeekDaysPhase2('es')).toBe(dias);
  });

  it('should return an empty array', () => {
    expect(getWeekDaysPhase2('fr')).toHaveLength(0);
  });
});
