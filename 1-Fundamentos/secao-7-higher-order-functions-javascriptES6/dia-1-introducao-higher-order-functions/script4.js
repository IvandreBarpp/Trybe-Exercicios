const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nameOfNames) => nameOfNames === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));