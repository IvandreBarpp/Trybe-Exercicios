let peca = 'BISPO';


switch (peca.toLowerCase()) {
  case 'peão':
    console.log('Para frente (Se no ponto de partida, uma ou duas casas, do contrário apenas uma)');
    break;

  case 'bispo':
    console.log('Diagonais (Quantas casas quiser)');
    break;

  case 'cavalo':
    console.log('Em L (Uma casa para qualquer lado, em seguida 3 casas para qualquer lado (Apenas horizontal e verticalmente))');
    break;

  case 'torre':
    console.log('Vertical e Horizontal (Quantas casas quiser)');
    break;

  case 'rainha':
    console.log('Vertical, Horizontal e Diagonal (Quantas casas quiser)');
    break;

  case 'rei':
    console.log('Apenas uma casa para qualquer lado');
    break;

  default:
    console.log('Peça inválida!');
}