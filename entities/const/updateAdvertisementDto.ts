/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Loan API
 * 지역, 상품 등을 Query를 통해 여러 개를 보낼 때는 콤마(,)로 구분하여 보내주세요. 예시: ?location=서울,부산,대구
 * OpenAPI spec version: 1.0
 */
import type { UpdateAdvertisementDtoLoanAvailableLocationItem } from './updateAdvertisementDtoLoanAvailableLocationItem'
import type { UpdateAdvertisementDtoProductTypeItem } from './updateAdvertisementDtoProductTypeItem'

export type UpdateAdvertisementDto = {
  /** 광고 제목 */
  title?: string
  /** 광고 부제목 */
  sub_title?: string
  /** 광고 내용 */
  contents?: string
  /** 광고 이미지 URL */
  image_url?: string
  /** 대출 가능 지역 목록 */
  loan_available_location?: UpdateAdvertisementDtoLoanAvailableLocationItem[]
  /** 커버 이미지 URL */
  cover_img?: string
  /** 대출 한도 금액 */
  loan_limit?: number
  /** 상품 타입 목록 */
  product_type?: UpdateAdvertisementDtoProductTypeItem[]
}
