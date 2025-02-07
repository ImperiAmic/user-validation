const usarName = "Raimon";
const password = "Due:0y.^*!Xn>7DFh.o?#@3W";
const passwordRepeat = "Due:0y.^*!Xn>7DFh.o?#@3W";
const age = 34;

const regexString = /\w{5,}/g;
const nameValidation = regexString.test(usarName);

const passwordLength = password.length;
const passwordLengthValidation = passwordLength >= 8;

const regexNumber = /\d{1,}/g;
const passwordNumberValidation = regexNumber.test(password);

const regexMayus = /[A-Z]/g;
const passwordLetterMayus = regexMayus.test(password);

const passwordValidation =
  (passwordLengthValidation === passwordNumberValidation) ===
  passwordLetterMayus;

const passwordRepeatValidation = passwordRepeat.includes(password);

const adultAge = 18;
const ageValidation = age >= adultAge;

console.log(`El nombre de usuario es válido: ${nameValidation}
La contraseña es válida: ${passwordValidation}
La repetición de la contraseña es válida: ${passwordRepeatValidation}
Es mayor de edad: ${ageValidation}`);
