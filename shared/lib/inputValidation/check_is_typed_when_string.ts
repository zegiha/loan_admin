export default function check_is_typed_when_string(v: any): string | null {
  if(typeof v !== 'string') return '이상한 입력이 들어왔습니다'
  if(v === '') return '필수 입력 값입니다'

  return null
}
