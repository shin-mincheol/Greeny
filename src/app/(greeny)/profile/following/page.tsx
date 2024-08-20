import Image from 'next/image';
import styles from './Following.module.scss';
import NormalProfile from '@images/NormalProfile.svg';
import Input from '@/components/Input';
import { auth } from '@/auth';
import { Following } from '@/types/follow';
import { MultiItem } from '@/types/response';
import ClientButton from './ClientButton';
import ClientForm from './ClientForm';
import { FollowingListRes } from '../page';

export default async function Page() {
  const session = await auth();
  if (!session) return '로그인 만료';
  const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + '/bookmarks/user', {
    headers: {
      'client-id': '03-Greeny',
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const followingListRes = (await response.json()) as FollowingListRes;

  return (
    <div className={styles.main_wrapper}>
      {/* <form className={styles.search_form}>
        <Input type="search" name="search" id="search" placeholder="식물명, 질문을 검색해주세요." />
        <button className={styles.btn_submit}>
          <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
        </button>
      </form> */}

      <ClientForm list={followingListRes.item} />

      <ul className={styles.follow_list}>
        {followingListRes.item.map((item) => (
          <User key={item._id} {...item} />
        ))}
      </ul>
    </div>
  );
}
function User(following: Following) {
  return (
    <li className={styles.item_wrapper}>
      <div className={styles.user_info_wrapper}>
        <div className={styles.thumbnail_wrapper}>
          <Image src={!following.user.image ? NormalProfile : process.env.NEXT_PUBLIC_API_SERVER + '/' + following.user.image} alt="썸네일" width={50} height={50} />
          <div className={styles.user_data}>
            <p>{following.user.name}</p>
            <span>u1@market.com</span>
          </div>
        </div>
        <ClientButton _id={following._id} />
      </div>
    </li>
  );
}
