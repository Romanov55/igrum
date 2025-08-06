import { Info } from '@/components/header';
import { create } from 'zustand';

type StoreState = {
  userInfo: Info | null;
  setUserInfo: (hostname: Info) => void;
};

export const useStore = create<StoreState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
}));