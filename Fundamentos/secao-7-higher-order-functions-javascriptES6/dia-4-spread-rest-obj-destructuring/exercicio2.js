const sum = (...numbers) => numbers.reduce((acc, value) => acc + value, 0);

console.log(sum(4, 5, 6));