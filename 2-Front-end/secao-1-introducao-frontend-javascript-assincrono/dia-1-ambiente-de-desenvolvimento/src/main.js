import validator from 'validator';

const input = document.querySelector('#input');
const select = document.querySelector('#option');
const button = document.querySelector('#btn-validate');
const answer = document.querySelector('#answer');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    email: validator.isEmail(input.ariaValueMax),
    cpf: validator.isTaxID(input.ariaValueMax, 'pt-BR'),
    hexColor: validator.isHexColor(input.value),
    url: validator.isURL(input.value),
  };
  answer.innerHTML = `A validação retornou ${campos[select.value]}`;
});
