import { ImageRes } from './image';

export interface UserData {
  _id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  type: 'seller';
  image?: ImageRes[];
  token?: {
    accessToken: string;
    refreshToken: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type UserSimple = {
  _id: number;
  name: string;
  image: string;
};

export type UserLoginForm = {
  email: string;
  password: string;
};

export type UserForm = {
  type: 'seller';
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  attach?: FileList;
  image?: string;
};
