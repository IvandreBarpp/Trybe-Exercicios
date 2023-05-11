const substituaX = name => {
  const frase = 'Tryber x aqui';
  const palavras = frase.split(" ");
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index] === 'x') {
      palavras[index] = name;
    }
  }
  return palavras.join(' ');
}

// console.log(substituaX('Ivandré'));

const minhasSkills = palavras => {
  const skills = ['Git', 'HTML', 'CSS'];
  let fraseFull = `${palavras} 
  Minhas três principais habilidades são:`;
  for (let index in skills) {
    fraseFull = `${fraseFull} 
    - ${skills[index]}`
  }
  return fraseFull;
  // OU:
  // **
  // let fraseFull = `${palavras}
  // Minhas três principais habilidades são:
  // - ${skills[0]}
  // - ${skills[1]}
  // - ${skills[2]}`;
  // return fraseFull;
  // **
}

console.log(minhasSkills(substituaX('Ivandré')));