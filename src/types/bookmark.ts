import { ImageRes } from './image';
import { UserSimple } from './user';

// export interface User {
//   _id: number;
//   user_id: number;
//   createdAt: string;
//   user: UserSimple & { type: 'seller' };
// }

export interface User {
  _id: number;
  name: string;
  email: string;
  image: string;
  type: 'seller';
}

export interface Plant {
  _id: number;
  name: string;
  price: number;
  quantity: number;
  buyQuantity: number;
  mainImages: ImageRes[];
}

interface BookmarkHeader {
  _id: number;
  createdAt: string;
}

export interface UserBookmark extends BookmarkHeader {
  user: User;
}

export interface PlantBookmark extends BookmarkHeader {
  product: Plant;
}

export type Bookmark = UserBookmark | PlantBookmark;

// export type Bookmark<T> = { user: T; bookmark?: never } | ({ product: T; user?: never } & BookmarkHeader);
