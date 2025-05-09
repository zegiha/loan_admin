import {AdEntity} from '../../../prevEntities'

export default function(v: AdEntity['name']) {
  switch (v) {
    case 'premiumBanner':
      return '프리미엄 배너광고';
    case 'mainBanner':
      return '메인 베너광고';
    case 'mainTopBanner':
      return '메인 TOP 배너광고';
    case 'sponsorLink':
      return '스폰서 링크';
    case 'locationBanner':
      return '지역 배너광고';
    case 'productionBanner':
      return '상품 배너 광고';
    case 'inquiryCompanyUpload':
      return '실시간 대출문의 업체 등록';
    case 'line':
      return '줄광고';
    case 'lineJump':
      return '줄광고 점프 추가 사용';
  }
}