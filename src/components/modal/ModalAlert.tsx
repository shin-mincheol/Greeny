'use client';

import useFocusTrap from '@/hooks/useFocusTrap';
import useModal from '@/hooks/useModal';
import styles from '@components/modal/Modal.module.scss';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ModalAlert() {
  const { alertState } = useModal();
  const btnYes = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (alertState.isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    function showScroll() {
      document.body.style.overflow = 'auto';
    }

    return () => showScroll();
  }, [alertState.isOpened]);
  useFocusTrap(btnYes);

  const modalAlert = (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.text}>{alertState.text.content}</div>
        <div className={styles.buttons}>
          <button ref={btnYes} type="button" className={styles.btn_ok} onClick={alertState.proceed}>
            {alertState.text.firstBtn}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalAlert, document.querySelector('main') as HTMLElement);
}
