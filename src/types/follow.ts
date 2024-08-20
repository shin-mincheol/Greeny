import { UserSimple } from './user';

export interface Following {
  _id: number;
  user_id: number;
  createdAt: string;
  user: UserSimple & { type: 'seller' };
}
