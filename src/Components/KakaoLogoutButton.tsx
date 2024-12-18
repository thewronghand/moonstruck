import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authAtom';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #9c88ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: #8c78ff;
  }
`;

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

  return <StyledButton onClick={handleLogout}>로그아웃</StyledButton>;
}
