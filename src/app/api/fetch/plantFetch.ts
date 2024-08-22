import { auth } from '@/auth';
import { FileRes } from '@/types/image';
import { PlantForm, PlantRes } from '@/types/plant';
import { ApiResWithValidation, MultiItem, SingleItem } from '@/types/response';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function fetchPlantsDetail<T>(id: string | undefined) {
  const url = `${SERVER}/products/${id}`;
  const res = await fetch(url, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const resJson = await res.json();

  return resJson.item;
}

export async function fetchAddPlant(formData: FormData, accessToken: string | undefined): Promise<ApiResWithValidation<SingleItem<PlantRes>, PlantForm>> {
  const plantObj = {
    price: 999,
    quantity: 999,
    name: formData.get('name'),
    nickName: formData.get('nickName'),
    light: formData.get('light'),
    grwhTp: formData.get('grwhTp'),
    humidity: formData.get('humidity'),
    adoptionDate: formData.get('adoptionDate'),
    waterCycle: formData.get('waterCycle'),
    content: formData.get('content'),
    mainImages: [{ path: '', name: '' }],
  };
  const attach = formData.get('attach') as File;

  if (attach?.size > 0) {
    const fileRes = await fetch(`${SERVER}/files`, {
      method: 'POST',
      headers: {
        'client-id': `${DBNAME}`,
      },
      body: formData,
    });

    if (!fileRes.ok) {
      throw new Error('파일 업로드 실패');
    }
    const fileData: MultiItem<FileRes> = await fileRes.json();

    console.log(fileData);

    plantObj.mainImages = [
      {
        path: fileData.item[0].path,
        name: fileData.item[0].name,
      },
    ];
  }

  const res = await fetch(`${SERVER}/seller/products`, {
    method: 'POST',
    headers: {
      'client-id': `${DBNAME}`,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(plantObj),
  });
  const resJson = await res.json();
  return resJson;
}

export async function fetchAddDiary(formData: FormData, accessToken: string | undefined): Promise<ApiResWithValidation<SingleItem<PlantRes>, PlantForm>> {
  const diaryObj = {
    type: formData.get('type') || 'diary',
    title: formData.get('title'),
    content: formData.get('content'),
    plantState: formData.get('plantState'),
    action: formData.get('action'),
    actionDate: formData.get('actionDate'),
    image: [{ path: '', name: '' }],
  };
  const attach = formData.get('attach') as File;

  if (attach?.size > 0) {
    const fileRes = await fetch(`${SERVER}/files`, {
      method: 'POST',
      headers: {
        'client-id': `${DBNAME}`,
      },
      body: formData,
    });

    if (!fileRes.ok) {
      throw new Error('파일 업로드 실패');
    }
    const fileData: MultiItem<FileRes> = await fileRes.json();

    console.log(fileData);

    diaryObj.image = [
      {
        path: fileData.item[0].path,
        name: fileData.item[0].name,
      },
    ];
  }

  const res = await fetch(`${SERVER}/posts`, {
    method: 'POST',
    headers: {
      'client-id': `${DBNAME}`,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(diaryObj),
  });
  const resJson = await res.json();
  return resJson;
}
