let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EX1:
// for (let index = 0; index < numbers.length; index += 1) {
// console.log(numbers[index]);
// }

// EX2:
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }
// let media = soma / numbers.length;
// console.log(media);

// EX3:
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }
// let media = soma / numbers.length;
// if (media > 20) {
//   console.log('O valor da média aritmética é maior que 20');
// } else {
//   console.log('O valor da média aritmética é menor ou igual a 20');
// }

// EX4:
// let maiorNumero = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > maiorNumero) {
//     maiorNumero = numbers[index];
//   }
// }
// console.log(maiorNumero);

// EX5:
// let contaImpares = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     contaImpares += 1;
//   }
// }
// if (contaImpares === 0) {
//   console.log('Nenhum valor ímpar encontrado');
// } else {
//   console.log(contaImpares);
// }

// EX6:
// let menorNumero = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] < menorNumero) {
//     menorNumero = numbers[index];
//   }
// }
// console.log(menorNumero);

// EX7:
// let numbers1 = [];
// for (let index = 1; index <= 25; index += 1) {
//   numbers1.push(index);
// }
// console.log(numbers1);

// EX8:
// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// let divisao = 0;
// for (let index = 0; index < numbers1.length; index += 1) {
//   divisao = numbers1[index] / 2;
//   console.log(divisao);
// }

// EX9:
// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }
// console.log(fatorial);

// EX10:
// let word = 'tryber';
// let inverteWord = '';
// for (let index = word.length -1; index >= 0; index -= 1) {
//   inverteWord += word[index];
// }
// console.log(inverteWord);

// EX11:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menorString = array[0];
// let maiorString = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maiorString.length) {
//     maiorString = array[index];
//   }
// }
// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < menorString.length) {
//     menorString = array[index];
//   }
// }
// console.log(menorString, maiorString);

// EX12:
let maiorNumeroPrimo = 0;
let primo = undefined;

for (let index = 50; index >= 2; index -= 1) {
  primo = true;
  for (let index1 = 2; index1 < index; index1 += 1) {
    if (index % index1 === 0) {
      primo = false;
    }
  }
  if (primo == true) {
    maiorNumeroPrimo = index;
    break;
  }
}
console.log(maiorNumeroPrimo);