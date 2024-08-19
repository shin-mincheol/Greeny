import { ImageRes } from './image';
import { UserSimple } from './user';

export interface PlantForm {
  name: string;
  nickName: string;
  image?: ImageRes[];
  grwhTp: '16~20℃' | '21~25℃';
  waterCycle: number;
  adoptionDate: string;
  light: '낮은 광도(300~800 Lux)' | '중간 광도(800~1,500 Lux)' | '높은 광도(1,500~10,000 Lux)';
  mainImages: ImageRes | ImageRes[];
  price: number;
  shippingFees: number;
  quantity: number;
}

export interface PlantSimple {
  name: string;
  image: ImageRes;
}

export interface PlantRes extends PlantForm {
  _id: number;
  seller_id: number;
  feature: string;
  show: boolean;
  active: boolean;
  buyQuantity: number;
  createdAt: string;
  updatedAt: string;
}
export interface PlantDetailRes {
  _id: number;
  type: 'diary';
  product_id: number;
  seller_id: number;
  views: number;
  title: string;
  content: string;
  extra: { plantState: string; action: string; actionDate: string };
  image: ImageRes[];
  user: UserSimple;
  createdAt: string;
  updatedAt: string;
  product: { name: string; image: null };
  repliesCount: 0;
}
