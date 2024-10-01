'use client';
import styles from './MyPlantDetail.module.scss';
import { PlantRes } from '@/types/plant';
import { useEffect, useRef, useState } from 'react';
import { plantsDelete } from '@/app/api/actions/plantAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Session } from 'next-auth';
import useModal from '@/hooks/useModal';

export default function PlantInfo({ item, user }: { item: PlantRes; user: Session | null }) {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const subMenuBoxRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { confirm } = useModal();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleDelete = async () => {
    const modal = await confirm(`"정말 떠나보낼 거예요?" \n${item.name}이(가) 마지막으로 잎사귀를 흔들고 있어요... 🍃`);
    if (modal) {
      plantsDelete(item._id);
      router.push('/plant');
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && subMenuBoxRef.current && !subMenuBoxRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.contents_wrapper}>
      <div className={styles.plant_gardeningMo}>
        <div className={styles.plant_head}>
          <h3>가드닝 정보</h3>
          {Number(user?.user?.id) === item?.seller_id && (
            <button className={styles.subMeun} ref={menuRef} onClick={handleMenu}>
              <span className="hidden">메뉴</span>
            </button>
          )}
          {menu && (
            <div className={styles.subMenuBox} ref={subMenuBoxRef}>
              <Link href={`/plant/${item._id}/edit`} className={styles.subMenuItem}>
                식물 수정
              </Link>
              <hr />
              <button type="button" onClick={handleDelete} className={`${styles.subMenuItem} ${styles.delete}`}>
                식물 삭제
              </button>
            </div>
          )}
        </div>
        <ul>
          <li>
            <span>온도</span>
            <p>{item.grwhTp}</p>
          </li>
          <li>
            <span>습도</span>
            <p>{item.humidity}</p>
          </li>
          <li>
            <span>물주기</span>
            <p>{item.waterCycle}일에 한번씩</p>
          </li>
          <li>
            <span>일조량</span>
            <p>{item.light}</p>
          </li>
        </ul>
      </div>
      <div className={styles.plant_tips}>
        <h3>특징</h3>
        <pre>{item.content}</pre>
      </div>
    </div>
  );
}
