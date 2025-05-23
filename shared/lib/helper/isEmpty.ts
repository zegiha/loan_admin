export default function isEmpty(v: any) {
  let sw = v.length === 0 || !v
  if(sw) return sw
  return v[0].length <= 0
}
