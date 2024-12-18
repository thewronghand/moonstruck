import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authAtom';
import { LogoutButton } from './styles/KakaoLogoutButton.styles';

export default function KakaoLogoutButton() {
  const setUser = useSetRecoilState(userState);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      const LOGOUT_REDIRECT_URI = `${window.location.origin}/`;
      window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${
        import.meta.env.VITE_KAKAO_REST_API_KEY
      }&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>;
}
