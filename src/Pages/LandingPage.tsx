import { useNavigate } from 'react-router-dom';
import KakaoLoginButton from '../Components/KakaoLoginButton';

export default function LandingPage() {
  const navigate = useNavigate();

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  }

  return (
    <div>
      <h2>문스트럭</h2>
      <h3>Anthropic Claude 3.5 Sonnet을 이용한 AI 타로점 서비스</h3>
      <button
        onClick={() => {
          navigate('/query');
        }}
      >
        시작하기
      </button>

      <KakaoLoginButton />
    </div>
  );
}
