let salarioBruto = 3000;
let salarioBase;
let aliquotaIR;
let aliquotaINSS;
let salarioLiquido;

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  aliquotaINSS = 570.88;
} else {
  console.log('Valor de salário inválido!');
}

salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase >= 0 && salarioBase <= 1903.98) {
  aliquotaIR = salarioBase - 0;
} else if (salarioBase > 1903.99 && salarioBase <= 2828.6) {
  aliquotaIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase > 2828.6 && salarioBase <= 3751.05) {
  aliquotaIR = salarioBase * 0.15 - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  aliquotaIR = salarioBase * 0.225 - 636,13;
} else if (salarioBase > 4664.68) {
  aliquotaIR = salarioBase * 0.275 - 869.36;
} else {
  console.log('Valor de salário inválido!');
}

salarioLiquido = salarioBase - aliquotaIR;

console.log(salarioLiquido);