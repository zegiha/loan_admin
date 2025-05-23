const replaceTarget = [
  '.',
  '-',
  ',',
  ' ',
]

export default function formatPhoneWithHyphen(v: string): string {
  replaceTarget.forEach(target => {
    v = v.replaceAll(target, '')
  })

  if(v.length === 11)
    v = `${v.slice(0, 3)}-${v.slice(3, 7)}-${v.slice(7, 11)}`
  else if(v.length === 10)
    v = `${v.slice(0, 2)}-${v.slice(2, 6)}-${v.slice(6, 10)}`

  return v
}