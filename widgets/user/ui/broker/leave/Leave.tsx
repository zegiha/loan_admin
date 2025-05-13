import {useUserControllerGetWithdrawalRequests} from '@/entities/api/user/user'

export default function Leave() {
  const {
    data,
    status,
    error
  } = useUserControllerGetWithdrawalRequests()

  return ()
}