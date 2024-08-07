import Image from 'next/image';
import styles from './Book.module.scss';
import PlantImg1 from '@images/PlantImg1.png';

export default async function Book() {
  const isModalOpen = true;
  return (
    <div className={styles.main_wrapper}>
      <form className={styles.main_search}>
        <input type="search" name="search" id="search" placeholder="식물명, 질문을 검색해주세요" />
        <button>돋보기</button>
        <button>필터</button>
      </form>

      <div className={styles.content}>
        <ul className={styles.content_list}>
          <Item />
          <Item />
          <Item />
        </ul>
      </div>

      {isModalOpen && <Modal />}
    </div>
  );
}

function Item() {
  return (
    <li>
      <div className={styles.item_wrapper}>
        <div className={styles.item_image_wrapper}>
          <Image src={PlantImg1} className={styles.item_image} width={90} height={90} alt="식물 썸네일" />
        </div>
        <div className={styles.item_content}>
          <p>식물 실제 이름</p>
          <span>식물 학명</span>
        </div>
      </div>
    </li>
  );
}

function Modal() {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.plant_type}>
        <p>식물의 종류를 선택해주세요.</p>
        <input type="checkbox" name="plant-type" id="관엽형" />
        <label htmlFor="관엽형">관엽형</label>
        <input type="checkbox" name="plant-type" id="직립형" />
        <label htmlFor="직립형">직립형</label>
        <input type="checkbox" name="plant-type" id="덩굴성" />
        <label htmlFor="덩굴성">덩굴성</label>
        <input type="checkbox" name="plant-type" id="풀모양" />
        <label htmlFor="풀모양">풀모양</label>
        <input type="checkbox" name="plant-type" id="로제트형" />
        <label htmlFor="로제트형">로제트형</label>
        <input type="checkbox" name="plant-type" id="다육형" />
        <label htmlFor="다육형">다육형</label>
      </div>
      <div className={styles.plant_props}></div>
      <div>
        <p>식물이 필요한 햇빛의 양을 선택해주세요.</p>
        <input type="checkbox" name="light-quantity" id="낮은 광도" />
        <label htmlFor="낮은 광도">낮은 광도</label>
        <input type="checkbox" name="light-quantity" id="중간 광도" />
        <label htmlFor="중간 광도">중간 광도</label>
        <input type="checkbox" name="light-quantity" id="높은 광도" />
        <label htmlFor="높은 광도">높은 광도</label>
      </div>
      <div>
        <p>식물의 물 주기 빈도를 선택해주세요.</p>
        <input type="radio" name="watering-frequency" id="always" />
        <label htmlFor="always">항상 물을 촉촉하게 유지(물에 잠김)</label>
        <input type="radio" name="watering-frequency" id="usually" />
        <label htmlFor="usually">흙을 촉촉하게 유지(물에 잠기지 않음)</label>
        <input type="radio" name="watering-frequency" id="sometimes" />
        <label htmlFor="sometimes">토양 표면이 말랐을 때 충분히 관수함</label>
        <input type="radio" name="watering-frequency" id="rarely" />
        <label htmlFor="rarely">화분 흙이 대부분 말랐을 떄 충분히 관수함</label>
      </div>
    </div>
  );
}

type Inputs = {
  type: 'checkbox' | 'radio';
  name: string;
  list: {
    id: string;
    label: string;
  }[];
};
// const Sample = {
//   type: 'checkbox',
//   name: 'plant-type',
//   list: [{ id: '관엽형', label: '관엽형' }],
// };
function Inputs({ inputs }: { inputs: Inputs }) {
  return (
    <div className={styles.inputs_wrapper}>
      {inputs.list.map((item) => (
        <>
          <input type={inputs.type} name={inputs.name} id={item.id} />
          <label htmlFor={item.id}>{item.label}</label>
        </>
      ))}
    </div>
  );
}
