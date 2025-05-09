import {check_is_typed_when_string} from '@/shared/lib'
import {Col, Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer, Table, TableLabeledRow, TextInput} from '@/shared/ui/molecules'
import {SubmitSection} from '@/shared/ui/organisms'
import {IInquiryAnswerModal} from '@/widgets/inquiry/const/type'
import useInquiryAnswerModal from '@/widgets/inquiry/model/useInquiryAnswerModal'

export default function InquiryAnswerModal({
  isOpen,
  setIsOpen,
  target,
  setTarget,
  refetch,
}: IInquiryAnswerModal) {
  const {
    ans, setAns,
    answerFunc,
    parseToTableForm,
  } = useInquiryAnswerModal()

  const closeFunc = () => {
    setTarget(null)
    setIsOpen(false)
  }

  return <Modal customKey={'inquiryAnswerModal'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
    <ModalContainer size={'large'} gap={24}>
      <Col width={'fill'} gap={16}>
        <Typo.Body>질문</Typo.Body>
        <Table>
          {parseToTableForm(target).map((v, i) => (
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
            answerFunc(target.inquiryId)
              .then(res => {
                if(res === 'success') {
                  refetch()
                  closeFunc()
                } else {
                  alert(res)
                }
              })
          } else {
            alert('답변이 비어있습니다')
          }
        }}
        cancelContents={'취소'}
        cancelFunc={closeFunc}
      />
    </ModalContainer>
  </Modal>
}
