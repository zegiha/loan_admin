import AdEntity from '@/entities/ad/const/AdEntity'
import AdRegisterEntity from '@/entities/ad/const/AdRegisterEntity'
import AdRegisterSummaryEntity from '@/entities/ad/const/AdRegisterSummaryEntity'
import {TAdEntityKeys, TAdEntityValues} from '@/entities/ad/const/AdEntity'
import getAdRegisterEntityById from '@/entities/ad/api/getAdRegisterEntityById'
import getAdRegisterSummaryEntity from '@/entities/ad/api/getAdRegisterSummaryEntity'

import BrokerEntity from '@/entities/broker/const/BrokerEntity'
import BrokerEntitySummary from '@/entities/broker/const/BrokerSummaryEntity'
import getBrokerById from '@/entities/broker/api/getBrokerById'
import getBrokerSummary from '@/entities/broker/api/getBrokerSummary'
import getBrokerSummaryEntityById from '@/entities/broker/api/getBrokerSummaryEntityById'

import BrokerRegisterEntity from '@/entities/brokerRegister/const/BrokerRegisterEntity'
import BrokerRegisterSummaryEntity from '@/entities/brokerRegister/const/BrokerRegisterSummary'
import getBrokerRegisterById from '@/entities/brokerRegister/api/getBrokerRegisterById'
import getBrokerRegisterSummary from '@/entities/brokerRegister/api/getBrokerRegisterSummary'
import registerEntityLabel from '@/entities/brokerRegister/const/registerEntityLabel'

import BlackListEntity from '@/entities/blackList/const/BlackListEntity'
import getBlackList from '@/entities/blackList/api/getBlackList'

import AdminEntity from '@/entities/admin/const/adminEntity'
import AdminRegisterEntity from '@/entities/admin/const/adminRegisterEntity'
import getAdmin from '@/entities/admin/api/getAdmin'
import getAdminRegister from '@/entities/admin/api/getAdminRegister'

import AdEditEntity from '@/entities/ad/const/AdEditEntity'
import AdEditSummaryEntity from '@/entities/ad/const/AdEditSummaryEntiy'
import getAdEditEntityById from '@/entities/ad/api/getAdEditEntityById'
import getAdEditSummaryEntity from '@/entities/ad/api/getAdEditSummaryEntity'

import AdProlongationEntity from '@/entities/ad/const/AdProlongationEntity'
import getAdProlongationEntity from '@/entities/ad/api/getAdProlongationEntity'

export {
  getAdRegisterEntityById,
  getAdRegisterSummaryEntity,

  getBrokerById,
  getBrokerSummary,

  getBrokerRegisterById,
  getBrokerRegisterSummary,
  getBrokerSummaryEntityById,
  registerEntityLabel,

  getBlackList,

  getAdmin,
  getAdminRegister,

  getAdEditEntityById,
  getAdEditSummaryEntity,

  getAdProlongationEntity,
}

export type {
  AdEntity,
  AdRegisterEntity,
  AdRegisterSummaryEntity,
  TAdEntityKeys,
  TAdEntityValues,

  BrokerEntity,
  BrokerEntitySummary,

  BrokerRegisterEntity,
  BrokerRegisterSummaryEntity,

  BlackListEntity,

  AdminEntity,
  AdminRegisterEntity,

  AdEditEntity,
  AdEditSummaryEntity,

  AdProlongationEntity,
}