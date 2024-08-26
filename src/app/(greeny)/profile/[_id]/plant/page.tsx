import { redirect } from 'next/navigation';
import { Bookmark } from '@/types/bookmark';
import { PlantListRes } from '@/types/plant';
import { CoreErrorRes, MultiItem, SingleItem } from '@/types/response';
import { auth } from '@/auth';
import PageTemplate from './PageTemplate';
import { Metadata, ResolvingMetadata } from 'next';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const userId = params.id;
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: 'Plant Following',
    openGraph: {
      title: `Plant Following`,
      description: `${userId}의 식물 팔로잉 페이지`,
      url: `/profile/${params.id}/plant`,
      images: [...previousImages],
    },
  };
}

export default async function Page({ params }: { params: { _id: string } }) {
  const session = await auth();
  if (!session) redirect('/login');

  const bookmarksRes = await fetch(`${SERVER}/users/${params._id}/bookmarks/`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const bookmarksList: SingleItem<Bookmark> | CoreErrorRes = await bookmarksRes.json();
  if (!bookmarksList.ok) {
    redirect('/');
  }
  const allPlantRes = await fetch(`${SERVER}/products?seller_id=${params._id}`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
    cache: 'no-cache',
  });
  const isMe = session.user?.id === params._id;

  const allPlantList: MultiItem<PlantListRes> = await allPlantRes.json();

  const processedBookmarkList = bookmarksList.item.product.map((plantBookmark) => {
    const plant = allPlantList.item.find((plant) => plant._id === plantBookmark.product._id);
    return {
      ...plantBookmark,
      createdAt: plant?.scientificName ?? '',
    };
  });
  return <PageTemplate list={processedBookmarkList} isMe={isMe} userId={params._id} />;
}
