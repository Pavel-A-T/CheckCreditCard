import './css/style.css';
import { checkPaymentSystem } from './js/app';

const btn = document.getElementById('submit-button');
const input = document.getElementById('card-number');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value) {
    if (checkPaymentSystem(input.value) === 'nothing') {
      const span = document.getElementById('not-valid');
      span.classList.remove('show');
    } else {
      const card = checkPaymentSystem(input.value);
      const span = document.getElementById('valid');
      span.classList.remove('show');
      span.innerText += ` This is ${card}!`;
      Array.from(document.getElementsByClassName('card')).filter((item) => !item.classList.contains(card))
        .forEach((item) => item.classList.add('card-disabled'));
    }
  }
});
