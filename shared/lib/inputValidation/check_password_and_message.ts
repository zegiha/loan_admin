export default function check_password_and_message(password: string): string | null {
  if(password.length === 0) {
    return '필수 입력 값입니다'
  } else if(!/[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\-]/g.test(password)) {
    return '영어, 숫자, 특수문자로만 이루져야 합니다'
  } else if(password.length < 8) {
    return '8글자 이상이어야 합니다'
  } else if(password.length > 24) {
    return '24글자 이하어야 합니다'
  }
  return null
}
