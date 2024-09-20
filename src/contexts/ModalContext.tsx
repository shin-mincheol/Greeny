'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import ModalConfirm from '@/components/modal/ModalConfirm';
import ModalAlert from '@/components/modal/ModalAlert';

type Props = {
  children: React.ReactNode;
};
export type ModalState = {
  isOpened: boolean;
  text: {
    content: string;
    firstBtn?: string;
    secondBtn?: string;
  };
  proceed?: () => void;
  cancel?: () => void;
};
export type ModalContextType = {
  confirmState: ModalState;
  setConfirmState: Dispatch<SetStateAction<ModalState>>;
  alertState: ModalState;
  setAlertState: Dispatch<SetStateAction<ModalState>>;
};

const initialState = {
  isOpened: false,
  text: { content: '' },
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalContextProvider({ children }: Props) {
  const [confirmState, setConfirmState] = useState<ModalState>(initialState);
  const [alertState, setAlertState] = useState<ModalState>(initialState);

  return (
    <ModalContext.Provider value={{ confirmState, setConfirmState, alertState, setAlertState }}>
      {children}
      {confirmState?.isOpened && <ModalConfirm />}
      {alertState?.isOpened && <ModalAlert />}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
