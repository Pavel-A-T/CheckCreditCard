import { checkPaymentSystem } from '../js/app';

test.each([
  ['5521752050466486', 'mastercard'],
  ['5521752602940301', 'mastercard'],
  ['5368290055961892', 'mastercard'],
  ['6368290055961892', 'nothing'],
  ['4058703123404149', 'visa'],
  ['2258703123404141', 'world'],
])(('Проверка функции checkPaymentSystem'), (value, exp) => {
  expect(checkPaymentSystem(value)).toBe(exp);
});
