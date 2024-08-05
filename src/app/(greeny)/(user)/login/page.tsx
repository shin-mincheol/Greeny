import styles from './Login.module.scss';
import Logo from '@/../public/images/Logo.svg';
import git from '@/../public/images/Social_Github.svg';
import google from '@/../public/images/Social_Google.svg';
import kakao from '@/../public/images/Social_KaKao.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.login_wrapper}>
      <Image className={styles.logo} src={Logo} alt="greeny" width={150} />

      <form>
        <div className={styles.input_container}>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" placeholder="이메일을 입력하세요" />
          <p>이메일 형식이 올바르지 않습니다.</p>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력하세요" />
          <p>비밀번호 형식이 올바르지 않습니다.</p>
        </div>

        <p className={styles.signupText}>
          처음 방문이신가요? <Link href={'/signup'}>회원가입</Link>
        </p>

        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>

      <div className={styles.socail}>
        <p>SNS계정으로 로그인</p>

        <div className={styles.socail_list}>
          <button type="button">
            <Image src={google} alt="구글" width={40} />
          </button>
          <button type="button">
            <Image src={kakao} alt="카카오" width={40} />
          </button>
          <button type="button">
            <Image src={git} alt="깃허브" width={40} />
          </button>
        </div>
      </div>
    </div>
  );
}