export default interface AdminEntity {
  userId: string
  id: string
  name: string
  authority: 'NORMAL' | 'SUPER'
}