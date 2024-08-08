import { PlantSimple } from "./plant";
import { UserData, UserSimple } from "./user";

export interface PostComment {
  _id: number;
  user: UserData;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostRes {
  _id: number;
  type: "post";
  tag: "free" | "qna" | "planterior";
  title: string;
  content: string;
  views: number;
  user: UserSimple;
  repliesCount?: number;
  replies?: PostComment[];
  seller_id?: null;
  createdAt: string;
  updatedAt: string;
  product?: { image: null };
}

export interface PostForm {
  type: "post";
  tag: "free" | "qna" | "planterior";
  title: string;
  content: string;
  //이미지 부분 나중에 추가
}

export interface DiaryRes {
  _id: number;
  product_id: number;
  type: "diary";
  title: string;
  content: string;
  plantState: "좋음" | "새싹" | "개화" | "아픔" | "죽음";
  action: "물주기" | "햇빛" | "분갈이" | "영양" | "가지" | "관찰";
  actionDate: string;
  views: number;
  user: UserSimple;
  seller_id: number;
  createdAt: string;
  updatedAt: string;
  product: PlantSimple;
}

export interface DiaryForm {
  type: "diary";
  product_id: number;
  title: string;
  content: string;
  plantState: "좋음" | "새싹" | "개화" | "아픔" | "죽음";
  action: "물주기" | "햇빛" | "분갈이" | "영양" | "가지" | "관찰";
  actionDate: string;
  //이미지 부분 나중에 추가
}
