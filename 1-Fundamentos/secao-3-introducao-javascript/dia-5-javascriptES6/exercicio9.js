const areaCirculo = raio => {
  const pi = 3.1415926535898;
  if (typeof raio !== 'number') {
    return `Insira um número.`;
  } else if (raio < 0) {
    return 'Insira um valor maior ou igual a 0';
  }
  const area = (raio ** 2) * pi;
  return `A área do círculo é ${area.toFixed(2)}m²`;
}

console.log(areaCirculo(5));