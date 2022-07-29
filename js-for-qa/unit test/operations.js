const { days, dias } = require('./constants');

const sumTwoNumbers = (a, b) => {
  return Number(a + b);
};

const getWeekDaysPhase1 = () => {
  return days;
};

const getWeekDaysPhase2 = (language) => {
  switch(language) {
    case 'en':
      return days;
    case 'es':
      return dias;
    default:
      return [];
  };
};

module.exports = {
  sumTwoNumbers,
  getWeekDaysPhase1,
  getWeekDaysPhase2
};
