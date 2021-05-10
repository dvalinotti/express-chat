// Validate value input against RegExp test
export function testRegExp(value, regex) {
  if (!(regex instanceof RegExp)) {
    throw new Error('Parameter `regex` is not instance of RegExp')
  } else {
    if (!regex.test(value)) {
      throw new Error('Input failed RegExp test')
    }
    return value
  }
}

// Tests if user-inputted email is a valid email address
// Using RegEx test recommended by OWASP - https://owasp.org/www-community/OWASP_Validation_Regex_Repository
export function validateEmail(mail) {
  // eslint-disable-next-line security/detect-unsafe-regex
  const regex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
  return testRegExp(mail, regex)
}
