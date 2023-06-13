let pai = document.querySelector('#pai');
let newBrother = document.createElement('section');
newBrother.id = 'newBrotherElemento';
pai.appendChild(newBrother);

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let newChildOfElemento = document.createElement('section');
newChildOfElemento.id = 'newChildOfElemento';
elementoOndeVoceEsta.appendChild(newChildOfElemento);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let firstChildofChild = document.createElement('section');
firstChildofChild.id = 'firstChildofChild';
primeiroFilhoDoFilho.appendChild(firstChildOfChild);

let terceiroFilho = primeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
