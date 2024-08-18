const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function fetchPlants<T>(refreshToken: string | undefined) {
  const url = `${SERVER}/seller/products`;
  const res = await fetch(url, {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  const resJson = await res.json();

  return resJson.item;
}

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

export async function fetchPlantsDiary<T>(userId: string | undefined, productId: number | undefined) {
  const url = `${SERVER}/posts/seller/${userId}?type=diary&product_id=${productId}`;
  const res = await fetch(url, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const resJson = await res.json();

  return resJson.item;
}
