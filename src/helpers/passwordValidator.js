export function passwordValidator(password) {
  if (!password) return "está errado."
  if (password.length < 5) return 'errado.'
  return ''
}
