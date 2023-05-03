let a = 1;
let b = 2;
let c = 3;

let numeroMaior;

if (a > b && a > c) {
  numeroMaior = a;
} else if (b > a && b > c) {
  numeroMaior = b;
} else {
  numeroMaior = c;
}

console.log('o maior número é ' + numeroMaior);