const username = "Raimon";
const password = "Dué:0y.^*!Xn>7DFh.Ò?#@3W";
const repeatedPassword = "Dué:0y.^*!Xn>7DFh.Ò?#@3W";
const age = 34;

const usernameValidationRegex = /\w{5,}/g;
const isUsernameValid = usernameValidationRegex.test(username);

const passwordMinimumLength = 8;
const passwordLength = password.length;
const isPasswordLengthValid = passwordLength >= passwordMinimumLength;

const passwordNumberValidationRegex = /\d{1,}/g;
const hasPasswordAtLeastOneNumber =
  passwordNumberValidationRegex.test(password);

const passwordUpperCaseRegex = /[A-ZÀ-Ú]/g;
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
