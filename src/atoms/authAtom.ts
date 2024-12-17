import { atom } from 'recoil';

interface User {
  uid: string;
  dailyCredits?: number;
  lastCreditRefresh?: Date;
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
