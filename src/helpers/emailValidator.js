export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Refaça."
  if (!re.test(email)) return 'está errado.'
  return ''
}
