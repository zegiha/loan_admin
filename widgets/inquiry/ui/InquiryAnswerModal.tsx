import {check_is_typed_when_string} from '@/shared/lib'
import {Col, Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer, Table, TableLabeledRow, TextInput} from '@/shared/ui/molecules'
import {SubmitSection} from '@/shared/ui/organisms'
import {IInquiryAnswerModal} from '@/widgets/inquiry/const/type'
import useInquiryAnswerModal from '@/widgets/inquiry/model/useInquiryAnswerModal'

export default function InquiryAnswerModal({
  isOpen,
  setIsOpen,
  targetId,
  setTargetId,
}: IInquiryAnswerModal) {
  const {
    ans, setAns,
    answerFunc,
    status, data, error,
  } = useInquiryAnswerModal(targetId)

  const closeFunc = () => {
    setTargetId(null)
    setIsOpen(false)
  }

  return <Modal isOpen={isOpen} setIsOpenAction={setIsOpen}>
    <ModalContainer size={'large'} gap={24}>
      {status === 'success' && (
        <>
          <Col width={'fill'} gap={16}>
            <Typo.Body>질문</Typo.Body>
            <Table>
              {data.map((v, i) => (
                <TableLabeledRow
                  key={i}
                  {...v}
                />
              ))}
            </Table>
          </Col>
          <TextInput
            input_type={'textarea'}
            value={ans}
            onChangeAction={v => setAns(v)}
            error_checker={[check_is_typed_when_string]}
            placeholder={'답변을 입력해주세요'}
            label={'답변'}
            height={280}
          />
          <SubmitSection
            submitContents={'답변 보내기'}
            submitFunc={() => {
              if(check_is_typed_when_string(ans) === null) {
                answerFunc()
                  .then(res => {
                    if(res) {
                      alert('답변을 보냈습니다')
                      closeFunc()
                    } else {
                      alert('답변을 보내던 중 문제가 발생했습니다\n다시 시도해주세요')
                    }
                  })
              } else {
                alert('답변이 비어있습니다')
              }
            }}
            cancelContents={'취소'}
            cancelFunc={closeFunc}
          />
        </>
      )}
      {status === 'pending' && (<Typo.Contents>로딩중...</Typo.Contents>)}
      {status === 'error' && (<Typo.Contents>{error?.message}</Typo.Contents>)}
    </ModalContainer>
  </Modal>
}