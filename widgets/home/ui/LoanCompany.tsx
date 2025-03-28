import {Col, Row, Typo} from '@/shared/ui/atoms'
import {SectionHeader} from '@/shared/ui/molecules'
import style from './style.module.css'

export default function LoanCompany() {
  return (
    <SectionHeader
      headerContents={'대부 중개 업자'}
      contentsGap={28}
    >
      <Col
        className={style.table}
        width={'fill'}
      >
        <Row
          className={style.tableHeader}
          width={'fill'}
          gap={24}
        >
          <Typo.Contents width={'fill'}>
            haha
          </Typo.Contents>
          <Typo.Contents width={'fill'}>
            haha
          </Typo.Contents>
          <Typo.Contents width={'fill'}>
            haha
          </Typo.Contents>
          <Typo.Contents width={'fill'}>
            haha
          </Typo.Contents>
        </Row>
        <Row
          className={style.tableBody}
          width={'fill'}
          gap={24}
        >
          <Typo.Contents width={'fill'}>
            haha
          </Typo.Contents>
          <Typo.Contents width={'fill'}>
            haha
          </Typo.Contents>
          <Typo.Contents width={'fill'}>
            haha
          </Typo.Contents>
          <Typo.Contents width={'fill'}>
            haha
          </Typo.Contents>
        </Row>
      </Col>
    </SectionHeader>
  )
}