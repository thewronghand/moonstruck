import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authAtom';

export default function KakaoLogoutButton() {
  const setUser = useSetRecoilState(userState);

  const handleLogout = async () => {
    try {
      // 1. Firebase 로그아웃
      await signOut(auth);

      // 2. Recoil 상태 초기화
      setUser(null);

      // 3. 카카오 계정 로그아웃 페이지로 리다이렉트
      const LOGOUT_REDIRECT_URI = `${window.location.origin}/`;
      window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${
        import.meta.env.VITE_KAKAO_REST_API_KEY
      }&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}
