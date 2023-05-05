let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// EX1:
function addClientTrybeBank(userName) {
  if (typeof userName === 'string') {
    clientesTrybeBank.push(userName);
    return 'Seja bem vindo à TrybeBank ' + userName;
  } else {
    return 'Nome de usuário inválido.'
  }
}
console.log(addClientTrybeBank('Ivandré'));
console.log(clientesTrybeBank);
// EX2:
function delClientTrybeBank(userName) {
  let clienteEncontrado = false;
    if (typeof userName === 'string') {
      for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (userName === clientesTrybeBank[index]) {
          clientesTrybeBank.splice(index, 1);
          clienteEncontrado = true;
          return 'O cliente ' + userName + ' foi removido com sucesso.'
        }
      }
      if (clienteEncontrado === false);
      return 'Cliente não encontrado.'
    } else {
      return 'Nome de usuário inválido.'
    }
  }
  console.log(delClientTrybeBank('Ivandré'));
  console.log(clientesTrybeBank);