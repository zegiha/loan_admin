import {BrokerEntitySummary} from '@/entities'

export default async function(userId: string): Promise<BrokerEntitySummary> {
  return {
    userId: userId,
    id: 'cottons',
    companyName: 'algorix',
  }
}