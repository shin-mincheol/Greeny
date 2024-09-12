import styles from './PostList.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CoreErrorRes, MultiItem } from '@/types/response';
import { PostRes } from '@/types/post';
import Button from '@/components/button/Button';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export default async function PostList(id: string, isMe: boolean) {
  const myPostRes = await fetch(`${SERVER}/posts/users/${id}?type=post`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const postData: MultiItem<PostRes> | CoreErrorRes = await myPostRes.json();
  if (!postData.ok) {
    return postData.message;
  }

  if (isMe && postData.item.length === 0) {
    return (
      <div className={styles.zero_item_noti_wrapper}>
        <div className={styles.zero_item_noti}>
          <div className={styles.zero_item_noti_msg}>
            <p>아직 작성된 게시글이 없어요!</p>
            <p>첫 글을 올려보세요!</p>
          </div>
          <Link href="/story/community/new" className={styles.zero_item_noti_link}>
            <Button btnSize="sm">게시글 작성하기</Button>
          </Link>
        </div>
      </div>
    );
  }
  const secondItem = postData.item.map((item) => {
    return (
      <li className={styles.contents_item} key={item._id}>
        <Link href={`/story/community/${item._id}`}>
          <div className={styles.contents_main}>
            <div className={styles.contents_info}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <div className={styles.contents_cover}>{item.image?.length > 0 ? <Image src={`${SERVER}${item.image.at(0)?.path}`} alt="식물 사진" sizes="100%" fill /> : ''}</div>
          </div>
        </Link>
      </li>
    );
  });

  const secondTab = <ul className={styles.list_wrapper}>{secondItem}</ul>;
  return secondTab;
}
