import {AnnouncementEntity} from '@/entities'
import {TSetState} from '@/shared/const'
import {check_is_typed_when_string} from '@/shared/lib'
import {Col} from '@/shared/ui/atoms'
import {Typo} from '@/shared/ui/atoms'
import {TextInput, Dropdown} from '@/shared/ui/molecules'

export default function AnnouncementEditInputSection({
  title,
  setTitle,
  contents,
  setContents,
  type,
  setType,
}: {
  title: string
  setTitle: TSetState<string>
  contents: string
  setContents: TSetState<string>
  type: AnnouncementEntity['type']
  setType: TSetState<AnnouncementEntity['type']>
}) {
  return (
    <Col width={'fill'} gap={8}>
      <Col width={'fill'} gap={2}>
        <Typo.Caption>제목</Typo.Caption>
        <TextInput
          value={title}
          onChangeAction={v => setTitle(v)}
          placeholder={'제목을 입력해주세요'}
          error_checker={[check_is_typed_when_string]}
        />
      </Col>
      <Col width={'fill'} gap={2}>
        <Typo.Caption>내용</Typo.Caption>
        <TextInput
          value={contents}
          input_type={'textarea'}
          height={320}
          onChangeAction={v => setContents(v)}
          placeholder={'내용을 입력해주세요'}
          error_checker={[check_is_typed_when_string]}
        />
      </Col>
      <Col width={'fill'} gap={2}>
        <Typo.Caption>분류</Typo.Caption>
        <Dropdown.Select
          width={'fill'}
          selectedContents={type === 'VALUABLE' ?
            '중요' :
            '일반'
          }
        >
          <Dropdown.Option
            isSelected={type === 'VALUABLE'}
            setSelected={() => setType('VALUABLE')}
            contents={'중요'}
          />
          <Dropdown.Option
            isSelected={type === 'NORMAL'}
            setSelected={() => setType('NORMAL')}
            contents={'일반'}
          />
        </Dropdown.Select>
      </Col>
    </Col>
  )
}