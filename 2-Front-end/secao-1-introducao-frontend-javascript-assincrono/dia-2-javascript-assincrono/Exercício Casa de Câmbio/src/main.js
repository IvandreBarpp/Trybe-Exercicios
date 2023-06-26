import Swal from 'sweetalert2';
import './style.css';

const moeda = document.querySelector('#pesquisarMoeda');
const button = document.querySelector('button');
const exibicao = document.querySelector('#exibição');
const lista = document.querySelector('#lista');

const createTitle = () => {
  const title = document.createElement('h2');
  title.innerHTML = `Valores referentes a 1 ${moeda.value}`;
  lista.appendChild(title);
};

button.addEventListener('click', () => {
  exibicao.innerHTML = '';
  lista.innerHTML = '';
  const moedaValue = moeda.value.toUpperCase();

  fetch(`https://api.exchangerate.host/latest?base=${moeda.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (moedaValue === '') throw new Error('Você precisa passar uma moeda');
      const arrayData = data.rates;
      createTitle();
      Object.keys(arrayData).forEach((cambio) => {
        if (moedaValue !== data.base) throw new Error('Moeda não existente')
        const divExibicao = document.createElement('div');
        const coin = document.createElement('h6');
        const exchangeCoin = document.createElement('div');
        const exchangeCoinText = document.createElement('p');
        coin.innerHTML = `${cambio}:`;
        exchangeCoinText.innerHTML = arrayData[cambio].toFixed(3);
        exibicao.appendChild(divExibicao);
        divExibicao.appendChild(coin);
        divExibicao.appendChild(exchangeCoin);
        exchangeCoin.appendChild(exchangeCoinText)
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        footer: '<a href="">Why do I have this issue?</a>',
      });
      moedaValue = '';
    });
});
