export default function check_password_and_message(password: string): string | null {
  if(password.length === 0) {
    return '필수 입력 값입니다'
  } else if(!/[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\-]/g.test(password)) {
    return '영어, 숫자, 특수문자로만 이루져있습니다'
  }
  return null
}
