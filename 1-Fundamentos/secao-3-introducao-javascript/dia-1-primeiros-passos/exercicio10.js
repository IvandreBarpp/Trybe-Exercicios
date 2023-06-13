let a = 10;
let b = -100;
let c = 70;
let somaLados = a + b + c;

if (somaLados == 180) {

  console.log(true);

} else if (somaLados <= 0) {
  
  console.log('Erro');

} else if (somaLados > 180 || somaLados < 180) {
  
  console.log(false);

}