export default function check_id_and_message(id: string): string | null {
  if(id.length === 0) {
    return '필수 입력 값입니다'
  } else if(!/[a-zA-Z0-9]/g.test(id)) {
    return '영어와 숫자로만 이루어져 있습니다'
  } else if(id.length < 4) {
    return '4자 이상입니다'
  }

  return null
}
