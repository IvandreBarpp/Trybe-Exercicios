const href = document.querySelector('#href');
const inputText = document.querySelector('#input-text');
const inputCheckbox = document.querySelector('#input-checkbox');

href.addEventListener('click', (event) => {
  event.preventDefault();
});

inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();
});

inputText.addEventListener('keypress', (event) => {
  const key = event.key;
  key !== 'a' ? event.preventDefault() : key;
});