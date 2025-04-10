export default function(v: Array<string>) {
  if (!Array.isArray(v)) throw new Error('shared/helper/toCommaString, Array<string>이 아님')
  return v.join(', ');
}
