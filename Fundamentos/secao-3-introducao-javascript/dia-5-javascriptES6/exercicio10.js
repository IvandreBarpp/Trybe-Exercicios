const maiorPalavra = (string) => {
  const palavras = string.split(" ");
  let aMaiorPalavra = "";

  for (const palavra of palavras) {
    if (palavra.length > aMaiorPalavra.length) {
      aMaiorPalavra = palavra;
    }
  }
  return aMaiorPalavra;
}


console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));