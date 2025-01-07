import {create} from "zustand";

export interface IAuthStore {
  is_login: boolean
  set_is_login: (v: boolean) => void
  access_token?: string
  set_access_token?: (v: string) => void
}

export const use_auth_store = create<IAuthStore>(setState => ({
  is_login: false,
  set_is_login: v => setState({is_login: v}),
  access_token: undefined,
  set_access_token: v => setState({access_token: v})
}))
