'use client';

import useFocusTrap from '@/hooks/useFocusTrap';
import useModal from '@/hooks/useModal';
import styles from '@components/modal/Modal.module.scss';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ModalConfirm() {
  const { confirmState } = useModal();
  const btnNo = useRef<HTMLButtonElement>(null);
  const btnYes = useRef<HTMLButtonElement>(null);

  useEffect(
    function restrictScrollWhileModalIsOpened() {
      if (confirmState.isOpened) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      function showScroll() {
        document.body.style.overflow = 'auto';
      }

      return () => showScroll();
    },
    [confirmState.isOpened],
  );
  useFocusTrap(btnNo, btnYes);

  const modalConfirm = (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.text}>{confirmState.text.content}</div>
        <div className={styles.buttons}>
          <button ref={btnNo} type="button" className={styles.btn_cancel} onClick={confirmState.cancel}>
            {confirmState.text.firstBtn}
          </button>
          <button ref={btnYes} type="button" className={styles.btn_ok} onClick={confirmState.proceed}>
            {confirmState.text.secondBtn}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalConfirm, document.querySelector('main') as HTMLElement);
}
