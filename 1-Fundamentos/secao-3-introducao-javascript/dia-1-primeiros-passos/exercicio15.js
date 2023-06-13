let custo = 1;
let preco = 3;

if (custo >= 0 && preco >= 0) {
  let totalCusto = custo * 1.2;
  let lucro = (preco - totalCusto) * 1000;
  console.log(lucro);
} else {
  console.log("Erro. Os valores não podem ser negativos!");
}