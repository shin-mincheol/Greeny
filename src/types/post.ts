import { ImageRes } from './image';
import { PlantSimple } from './plant';
import { UserSimple } from './user';

export interface PostComment {
  _id: number;
  user: UserSimple;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostRes {
  _id: number;
  type: 'post';
  title: string;
  content: string;
  views: number;
  user: UserSimple;
  repliesCount?: number;
  replies?: PostComment[];
  seller_id?: null;
  image: ImageRes[];
  createdAt: string;
  updatedAt: string;
  bookmarks: number;
  myBookmarkId?: number;
  product?: { image: null };
  extra?: {
    category: 'free' | 'qna' | 'planterior';
  };
}

export interface PostForm {
  type: 'post';
  category: 'free' | 'qna' | 'planterior';
  title: string;
  content: string;
}

export interface DiaryRes {
  _id: number;
  product_id: number;
  type: 'diary';
  title: string;
  content: string;
  extra: {
    plantState: '좋음' | '새싹' | '개화' | '아픔' | '죽음';
    action: '물주기' | '햇빛' | '분갈이' | '영양' | '가지' | '관찰';
    actionDate: Date | null;
  };
  views: number;
  user: UserSimple;
  seller_id: number;
  createdAt: string;
  updatedAt: string;
  product: PlantSimple;
  bookmarks: number;
  myBookmarkId?: number;
  image: ImageRes[];
  repliesCount: 0;
}

export interface DiaryForm {
  type: 'diary';
  product_id: number;
  title: string;
  content: string;
  plantState: '좋음' | '새싹' | '개화' | '아픔' | '죽음';
  action: '물주기' | '햇빛' | '분갈이' | '영양' | '가지' | '관찰';
  actionDate: Date | null;
  attach: File[];
}

export interface plantState {
  plantState: '좋음' | '새싹' | '개화' | '아픔' | '죽음';
}
export interface action {
  action: '물주기' | '햇빛' | '분갈이' | '영양' | '가지' | '관찰';
}
