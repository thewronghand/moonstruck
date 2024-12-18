import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/authAtom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLoginButton from '../Components/KakaoLoginButton';
import KakaoLogoutButton from '../Components/KakaoLogoutButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 30px;
  text-align: center;
`;

const StartButton = styled.button<{ $disabled?: boolean }>`
  width: 100%;
  padding: 15px;
  background-color: ${props => props.$disabled ? '#cccccc' : '#9c88ff'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: ${props => props.$disabled ? '#cccccc' : '#8c78ff'};
  }
`;

const InfoText = styled.p`
  color: #666;
  margin: 10px 0;
  text-align: center;
  line-height: 1.5;
`;

const CreditText = styled.p`
  color: #9c88ff;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 20px 0;
`;

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
            $disabled={user.dailyCredits === 0}
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
