import {LoanboardResponseDto} from '@/entities/const'
import {formatDateDotYmd, formatPhoneWithHyphen} from '@/shared/lib'

export function formatLoanboardResponseToTableLabeledRow(v: LoanboardResponseDto):
  Array<Array<{label: string; contents: string}>>{
  const res: Array<Array<{label: string; contents: string}>> = []

  res.push([
    {label: '분류', contents: v.type},
    {label: '지역', contents: v.available_location},
    {label: '작성일', contents: formatDateDotYmd(new Date(v.writed_date))},
  ])

  res.push([
    {label: '성별', contents: v.gender === 'MALE' ? '남성' : '여성'},
    {label: '나이', contents: `${v.age}세`},
    {label: '전화번호', contents: formatPhoneWithHyphen(v.tel)},
    {label: '직업 유무', contents: v.job_status ? '예' : '아니오'},
    {label: '월소득', contents: v.monthly_income ?? '없음'}
  ])

  res.push([
    {label: '제목', contents: v.title},
    {label: '내용', contents: v.contents}
  ])

  return res
}