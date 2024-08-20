import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps, ref?: React.Ref<HTMLInputElement>) {
  return <input type="search" className={styles.input} {...props} ref={ref} />;
}

export default forwardRef(Input);
