'use client';
import Image from 'next/image';
import styles from './Books.module.scss';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import plantList from '@/app/data/plantList';
import Link from 'next/link';
import Modal from '@/app/(greeny)/books/Modal';
import { PlantJson } from '@/types/plant';
import Filter from './Filter';
interface FormData {
  keyword: string;
}
export interface FilterValues {
  grwhstleCodes: string[];
  flclrCodes: string[];
  fmldecolrCodes: string[];
  lefmrkCodes: string[];
  lighttdemanddoCodes: string[];
  waterCycleCode: string;
}

export default function Page() {
  const [plants, setPlants] = useState<PlantJson[]>(plantList);
  const { register, handleSubmit } = useForm<FormData>();
  const submitHandler = (values: FormData) => {
    const result = plantList.filter((item) => item.cntntsSj.includes(values.keyword));
    setPlants(result);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const doSearch = (formData: FilterValues) => {
    const result = plantList.filter((plant) => {
      return (
        (formData.grwhstleCodes.length === 0 || formData.grwhstleCodes.includes(plant.grwhstleCode)) &&
        (formData.flclrCodes.length === 0 || formData.flclrCodes.includes(plant.flclrCode)) &&
        (formData.fmldecolrCodes.length === 0 || formData.fmldecolrCodes.includes(plant.fmldecolrCode)) &&
        (formData.lefmrkCodes.length === 0 || formData.lefmrkCodes.includes(plant.lefmrkCode)) &&
        (formData.lighttdemanddoCodes.length === 0 || formData.lighttdemanddoCodes.includes(plant.lighttdemanddoCode)) &&
        (formData.waterCycleCode === '' || plant.waterCycleCode === formData.waterCycleCode)
      );
    });
    setPlants(result);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.page_container}>
      <div className={styles.layout_main_search}>
        <div className={styles.heading_container}>
          <h2 className={styles.heading}>
            어떤 종류의
            <br />
            식물을 찾고 있나요?
          </h2>
        </div>

        <form className={styles.main_search} onSubmit={handleSubmit(submitHandler)}>
          <input type="search" placeholder="식물명, 질문을 입력해주세요" {...register('keyword')} />
          <div className={styles.btn_group}>
            <button type="submit" className={styles.btn_submit}>
              <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
            </button>
            <button type="button" className={styles.btn_btn} onClick={openModal}>
              <Image src="/images/FilterIcon.svg" width={18} height={18} alt="filter" />
            </button>
          </div>
        </form>
      </div>

      <Modal isOpen={isModalOpen}>
        <Filter onClose={closeModal} onSubmit={doSearch} />
      </Modal>

      <List list={plants} />
    </div>
  );
}
function List({ list }: { list: PlantJson[] }) {
  return (
    <ul className={styles.content_list}>
      {list.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }: { item: PlantJson }) {
  return (
    <li>
      <div className={styles.item_wrapper}>
        <div className={styles.item_image_wrapper}>
          <Link href={`/books/${item.cntntsNo}`}>
            <Image src={item.rtnFileUrl} className={styles.item_image} width={90} height={90} alt="식물 썸네일" />
          </Link>
        </div>
        <div className={styles.item_content}>
          <p>{item.cntntsSj}</p>
          <span>{item.plntbneNm}</span>
        </div>
      </div>
    </li>
  );
}

//
