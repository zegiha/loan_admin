import InquiryEntity from '@/prevEntities/inquiry/const/InquiryEntity'

export default async function getInquiryEntityById(inquiryId: string): Promise<InquiryEntity> {
  return {
    inquiryId,
    authorName: '배시현',
    authorPhone: '010-1234-5678',
    title: '사기 당했습니다',
    contents: '100만원을 24시 대부에서 빌렸는데\n이자율을 바꿨어요',
    createdAt: new Date('2025-04-12'),
  }
}