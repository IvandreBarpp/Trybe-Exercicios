let nota = 65;

if (nota >= 80 && nota <= 100) {
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
}else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera.");
}else if (nota < 60 && nota >= 0) {
  console.log("Infelizmente, você reprovou.");
}else {
  console.log("Nota inválida! Tenta novamente com um valor válido.");
}
