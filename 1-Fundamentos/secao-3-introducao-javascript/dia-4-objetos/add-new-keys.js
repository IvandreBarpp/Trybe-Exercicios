let student = {};

function addInfo(object, key, value) {
  object[key] = value;
}

addInfo(student, 'fullName', 'Ivandré Soares Barpp');
addInfo(student, 'age', 24);
addInfo(student, 'birthday', '02/24/1999');
addInfo(student, 'Email', 'xxxxxxxxxxx@gmail.com');
addInfo(student, 'celNumber', '(DDD)9xxxx-xxxx');
addInfo(student, 'GitHub', 'https://github.com/IvandreBarpp');
addInfo(student, 'LinkedIn', 'https://linkedin.com/IvandreBarpp');

console.log(student);