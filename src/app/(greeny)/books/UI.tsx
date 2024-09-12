'use client';

import { useState } from 'react';
import CardList from './CardList';
import Filter from './Filter';
import Modal from './Modal';
import styles from './UI.module.scss';
import { PlantJson } from '@/types/plant';
import plantList from '@/app/data/plantList';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

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

export default function UI() {
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
      <div className={styles.search_container}>
        <div className={styles.heading_container}>
          <h2 className={styles.heading}>
            어떤 종류의
            <br />
            식물을 찾고 있나요?
          </h2>
        </div>

        <form className={styles.search_form} onSubmit={handleSubmit(submitHandler)}>
          <input type="search" placeholder="식물명, 질문을 입력해주세요" {...register('keyword')} />
          <div className={styles.btn_wrapper}>
            <button type="submit" className={styles.search_btn}>
              <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
            </button>
            <button type="button" className={styles.filter_btn} onClick={openModal}>
              <Image src="/images/FilterIcon.svg" width={18} height={18} alt="filter" />
            </button>
          </div>
        </form>
      </div>

      <Modal isOpen={isModalOpen}>
        <Filter onClose={closeModal} onSubmit={doSearch} />
      </Modal>

      <CardList cards={plants} />
    </div>
  );
}
