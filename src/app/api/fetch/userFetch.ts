const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const CLIENT_ID = process.env.NEXT_PUBLIC_API_SERVER_CLIENT_ID;

export async function fetchAccessToken(refreshToken: string) {
  const url = `${SERVER}/auth/refresh`;
  const res = await fetch(url, {
    headers: {
      'client-id': `${CLIENT_ID}`,
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  return res;
}
