let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function verificaString(cliente) {
  if (typeof cliente !== 'string') {
    return 'Nome inválido. Tente novamente inserindo uma "string"!';
  } else {
    return true;
  }
}

function indexCliente(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = verificaString(cliente);
  if (validacao !== true) {
    return validacao;
  }
  let index = indexCliente(cliente) 
  if (index === false) {
    return 'Cliente não encontrado.';
  }
  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluído com sucesso.';
}

console.log(removeCliente(200));
console.log(removeCliente('Ivandré'));
console.log(removeCliente('John'));
console.log(clientesTrybeBank);