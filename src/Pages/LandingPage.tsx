import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/authAtom';
import { useNavigate } from 'react-router-dom';
import KakaoLoginButton from '../Components/KakaoLoginButton';
import KakaoLogoutButton from '../Components/KakaoLogoutButton';
import {
  Container,
  Title,
  Subtitle,
  StartButton,
  InfoText,
  CreditText
} from './styles/LandingPage.styles';

export default function LandingPage() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  }

  return (
    <Container>
      <Title>문스트럭</Title>
      <Subtitle>
        Anthropic Claude 3.5 Sonnet을 이용한<br />
        AI 타로점 서비스
      </Subtitle>

      {user ? (
        <>
          <CreditText>오늘 남은 크레딧: {user.dailyCredits}</CreditText>
          <StartButton
            onClick={() => navigate('/query')}
            disabled={user.dailyCredits === 0}
          >
            {user.dailyCredits === 0
              ? '오늘의 크레딧을 모두 사용했습니다'
              : '시작하기'}
          </StartButton>
          <KakaoLogoutButton />
        </>
      ) : (
        <>
          <InfoText>로그인하고 무료 크레딧으로 타로를 시작해보세요!</InfoText>
          <InfoText>하루 3회까지 무료로 타로를 볼 수 있습니다.</InfoText>
          <KakaoLoginButton />
        </>
      )}
    </Container>
  );
}
