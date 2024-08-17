import styles from './Signup.module.scss';
import SignupForm from './SignUpForm';

export default function Signup() {
  return (
    <div className={styles.signup_wrapper}>
      <SignupForm />
    </div>
  );
}
