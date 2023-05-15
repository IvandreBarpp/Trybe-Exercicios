const whereAreYou = document.getElementById('where-are-you');

const parent = whereAreYou.ParentElement;
parent.style.color = 'red';

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'First child of child';

const firstChild = parent.firstElementChild;

const firstChild1 = whereAreYou.previousElementSibling;

const attention = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild1 = parent.lastElementChild.previousElementSibling;