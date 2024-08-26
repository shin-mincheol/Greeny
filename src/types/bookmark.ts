import { ImageRes } from './image';
import { UserSimple } from './user';

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

export interface Post {
  _id: number;
  // images: ImageRes[];
  image: ImageRes[];
  type: 'post';
  title: string;
  user: UserSimple;
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
export interface PostBookmark extends BookmarkHeader {
  post: Post;
  memo?: string;
}
export interface Bookmark {
  byUser: {}[];
  user: UserBookmark[];
  product: PlantBookmark[];
  post: PostBookmark[];
}
