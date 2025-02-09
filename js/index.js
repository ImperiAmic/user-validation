const username = "Raimon";
const password = "Dué:0y.^*!Xn>7DFh.Ò?#@3W";
const repeatedPassword = "Dué:0y.^*!Xn>7DFh.Ò?#@3W";
const age = 34;

const usernameMinimumLength = 5;
const isUsernameValid = username.length >= usernameMinimumLength;

const passwordMinimumLength = 8;
const isPasswordLengthValid = password.length >= passwordMinimumLength;

const passwordNumberValidationRegex = /\d/;
const hasPasswordAtLeastOneNumber =
  passwordNumberValidationRegex.test(password);

const passwordUpperCaseRegex = /[A-ZÀ-Ú]/;
const hasPasswordAtLeastOneUpperCaseLetter =
  passwordUpperCaseRegex.test(password);

const isPasswordValid =
  isPasswordLengthValid &&
  hasPasswordAtLeastOneNumber &&
  hasPasswordAtLeastOneUpperCaseLetter;

const isPasswordRepeatedValid = repeatedPassword === password;

const adultAge = 18;
const isAgeValid = age >= adultAge;

console.log(`El nombre de usuario es válido: ${isUsernameValid}
La contraseña es válida: ${isPasswordValid}
La repetición de la contraseña es válida: ${isPasswordRepeatedValid}
Es mayor de edad: ${isAgeValid}`);
