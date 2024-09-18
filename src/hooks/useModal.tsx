import { ModalContextType, useModalContext } from '@/contexts/ModalContext';

export default function useModal() {
  const { confirmState, setConfirmState, alertState, setAlertState } = useModalContext() as ModalContextType;

  const alert = (content: string, btnText: { firstBtn: string } = { firstBtn: '확인' }) =>
    new Promise((resolve) => {
      setAlertState({
        text: { content, ...btnText },
        isOpened: true,
        proceed: () => {
          resolve(true);
          setAlertState({ text: { content: '' }, isOpened: false });
        },
      });
    });

  const defaultBtnText = { firstBtn: '취소', secondBtn: '확인' };
  const confirm = (content: string, btnText: { firstBtn?: string; secondBtn?: string } = defaultBtnText) => {
    btnText = { ...defaultBtnText, ...btnText };

    return new Promise((resolve) => {
      setConfirmState({
        text: { content, ...btnText },
        isOpened: true,
        proceed: () => {
          resolve(true);
          setConfirmState({ text: { content: '' }, isOpened: false });
        },
        cancel: () => {
          resolve(false);
          setConfirmState({ text: { content: '' }, isOpened: false });
        },
      });
    });
  };

  return { confirmState, confirm, alertState, alert };
}
