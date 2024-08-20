import Image from 'next/image';
import styles from './Follower.module.scss';
import NormalProfile from '@images/NormalProfile.svg';
import Input from '@/components/Input';

export default function Follower() {
  return (
    <div className={styles.main_wrapper}>
      <form className={styles.search_form}>
        <Input type="search" name="search" id="search" placeholder="식물명, 질문을 검색해주세요." />
        <button className={styles.btn_submit}>
          <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
        </button>
      </form>

      <ul className={styles.follow_list}>
        <User />
        <User />
        <User />
      </ul>
    </div>
  );
}

function User() {
  return (
    <li className={styles.item_wrapper}>
      <div className={styles.user_info_wrapper}>
        <div className={styles.thumbnail_wrapper}>
          <Image src={NormalProfile} alt="썸네일" />
          <div className={styles.user_data}>
            <p>네오</p>
            <span>u1@market.com</span>
          </div>
        </div>
      </div>
    </li>
  );
}
