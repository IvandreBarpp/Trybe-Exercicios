// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'goiaba', 'bergamota'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['laranja', 'limão', 'uva'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));