let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom',
};

function listaHabilidades(student) {
  let arrayDeHabilidades = Object.keys(student);
  for (let index in arrayDeHabilidades) {
    console.log(arrayDeHabilidades[index] + ', Nível: ' + student[arrayDeHabilidades[index]]);
  }
}

console.log('Estudante 1');
listaHabilidades(student1);

console.log('Estudante 2');
listaHabilidades(student2);