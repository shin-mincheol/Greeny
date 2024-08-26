import { redirect } from 'next/navigation';

export default function promptLoginModal() {
  const check = confirm('로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?');
  check && redirect('/login');
}
