import { Metadata } from 'next';
import styles from './Signup.module.scss';
import SignupForm from './SignUpForm';

export const metadata: Metadata = {
  title: 'SignUp',
  openGraph: {
    title: 'SignUp',
    description: 'Greeny에 가입하고 식물 관리의 첫걸음을 내딛어 보세요.',
    images: 'images/MetaImage.png',
    url: '/signup',
  },
};

export default function Signup() {
  return (
    <div className={styles.signup_wrapper}>
      <SignupForm />
    </div>
  );
}
