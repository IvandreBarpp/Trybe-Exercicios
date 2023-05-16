const value1 = document.querySelector('input#txt1');
const value2 = document.querySelector('input#txt2');
const res = document.querySelector('div#res');
const botao = document.querySelector('input#botao');

const multiplicaValores = () => {
  let v1 = Number(value1.value);
  let v2 = Number(value2.value);
  let resultado = v1 * v2;
  res.innerHTML = `A multiplicação de ${v1} x ${v2} é igual a: <strong>${resultado}</strong>`
}

botao.addEventListener('click', multiplicaValores);