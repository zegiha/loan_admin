import {TLocation, TProduction} from '@/shared/const'

type adEntity =
{
  name: 'premiumBanner'
  title: string
  location: Array<TLocation>
} |
{
  name: 'mainBanner'
  title: string
  contents: string
  location: Array<TLocation>
  img: string
} |
{
  name: 'mainTopBanner'
  title: string
  contents: string
  img: string
} |
{
  name: 'productionBanner'
  title: string
  subTitle: string
  location: Array<TLocation>
  img: string
  option: Array<TProduction>
} |
{
  name: 'locationBanner'
  title: string
  subTitle: string
  location: Array<TLocation>
  img: string
  option: Array<TLocation>
} |
{
  name: 'sponsorLink'
  contents: string
} |
{
  name: 'line'
  title: string
  loanLimit: string
} |
{
  name: 'lineJump'
} |
{
  name: 'inquiryCompanyUpload'
}

export default adEntity