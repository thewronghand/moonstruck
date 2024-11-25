import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/authAtom';
import { useNavigate } from 'react-router-dom';
import KakaoLoginButton from '../Components/KakaoLoginButton';
import KakaoLogoutButton from '../Components/KakaoLogoutButton';

export default function LandingPage() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  }

  console.log(user);

  return (
    <div>
      <h2>문스트럭</h2>
      <h3>Anthropic Claude 3.5 Sonnet을 이용한 AI 타로점 서비스</h3>

      {user ? (
        <>
          <p>오늘 남은 크레딧: {user.dailyCredits}</p>
          <KakaoLogoutButton />
          <button
            onClick={() => navigate('/query')}
            disabled={user.dailyCredits === 0}
          >
            {user.dailyCredits === 0
              ? '오늘의 크레딧을 모두 사용했습니다'
              : '시작하기'}
          </button>
        </>
      ) : (
        <>
          <p>로그인하고 무료 크레딧으로 타로를 시작해보세요!</p>
          <p>하루 3회까지 무료로 타로를 볼 수 있습니다.</p>
          <KakaoLoginButton />
        </>
      )}
    </div>
  );
}
