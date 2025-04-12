import {TProduction} from '@/shared/const'

const productionMap: Record<TProduction, string> = {
  all: '전체',
  worker: '직장인대출',
  unemployed: '무직자대출',
  women: '여성대출',
  private: '개인돈대출',
  delinquent: '연체자대출',
  small: '소액대출',
  noVisit: '무방문대출',
  monthly: '월변대출',
  sameDay: '당일대출',
  business: '사업자대출',
  daily: '일수대출',
  lowCredit: '저신용자대출',
  credit: '신용대출',
  additional: '추가대출',
  car: '자동차대출',
  realEstate: '부동산대출',
  h24: '24시대출',
  emergency: '급전대출',
  dayLabor: '일용직대출',
  freelancer: '프리랜서대출',
  pawn: '전당포대출',
  blacklisted: '신불자대출',
  housewife: '주부대출',
  rehabBankruptcy: '회생파산대출',
  refinance: '대환대출',
  other: '기타대출'
}

export default productionMap
