import { ImageRes } from './image';
import { UserSimple } from './user';

export interface PlantForm {
  name: string;
  nickName: string;
  attach: File[];
  grwhTp: string;
  humidity: string;
  waterCycle: number;
  adoptionDate: string;
  light: string;
  feature: string;
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

export interface PlantJson {
  cntntsNo: string;
  cntntsSj: string;
  dlthtsCodeNm: string;
  eclgyCodeNm: string;
  flclrCodeNm: string;
  fmldeSeasonCodeNm: string;
  fmldecolrCodeNm: string;
  fncltyInfo: string;
  frtlzrInfo: string;
  grwhTpCodeNm: string;
  grwhstleCodeNm: string;
  hdCodeNm: string;
  indoorpsncpacompositionCodeNm: string;
  lefStleInfo: string;
  lefcolrCodeNm: string;
  lefmrkCodeNm: string;
  lighttdemanddoCodeNm: string;
  managedemanddoCodeNm: string;
  managelevelCodeNm: string;
  orgplceInfo: string;
  plntbneNm: string;
  postngplaceCodeNm: string;
  prpgtEraInfo: string;
  prpgtmthCodeNm: string;
  soilInfo: string;
  waterCycle: string;
  waterCycleDay: string;
  rtnOrginlFileNm: string;
  rtnStreFileNm: string;
  rtnThumbFileNm: string;
  rtnFileUrl: string;
  grwhstleCode: string;
  flclrCode: string;
  fmldecolrCode: string;
  lefmrkCode: string;
  lighttdemanddoCode: string;
  waterCycleCode: string;
}
