export const checkValidName = (name) => {
  const namePattern = /^[A-Za-zА-Яа-яЁё]{2,}$/

  return namePattern.test(name)
}

export const checkValidPassword = (password, repeatedPassword = password) => {
  const passwordPattern = /^[a-zA-Z0-9]*$/

  if (password === repeatedPassword && password.length >= 8) {
    return passwordPattern.test(password)
  }
  return false
}

export const checkValidMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return emailPattern.test(mail)
}
