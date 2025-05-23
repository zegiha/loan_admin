import {LoanboardResponseDto} from '@/entities/const'

export interface ILoanInquiryTalbeRow {
  tel: LoanboardResponseDto['tel']
  available_location: LoanboardResponseDto['available_location']
  title: LoanboardResponseDto['title']
  writed_date: LoanboardResponseDto['writed_date']
  moreInfoFunc: () => void
}