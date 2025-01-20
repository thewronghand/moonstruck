// import { useRecoilValue } from 'recoil';
// import { userState } from '../atoms/authAtom';
import { useNavigate } from 'react-router-dom';
// import KakaoLoginButton from '../Components/KakaoLoginButton';
// import KakaoLogoutButton from '../Components/KakaoLogoutButton';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft, faCalendarDays, faUsers } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: white;
  position: relative;
  margin: 0 auto;
  max-width: 500px;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

// const Subtitle = styled.p`
//   font-size: clamp(1.2rem, 3vw, 1.4rem);
//   color: black;
//   line-height: 1.6;
//   margin-bottom: 16px;
//   width: 100%;
// `;

const Description = styled.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  padding: 0 20px;
`;

const UseCaseList = styled.ul`
  list-style: none;
  text-align: left;
  width: 100%;
  padding: 0 30px;
  margin-bottom: 10px;
`;

const UseCaseItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  color: #666;
  font-size: clamp(0.9rem, 2vw, 1rem);
  margin-bottom: 12px;
`;

const BottomDescription = styled(Description)`
  text-align: center;
`

const Icon = styled.span`
  font-size: 1.2rem;
  min-width: 24px;
  text-align: center;
`;

const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

const StartButton = styled.button`
  width: 100%;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  background-color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: #222;
  }
`;

// const InfoText = styled.p`
//   color: #666;
//   font-size: 0.95rem;
//   text-align: left;
//   line-height: 1.6;
// `;

const LogoImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;
`;

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeroSection>
        <LogoImage src="/logo-typo.png" alt="Moonstruck" />
        <Description>
          당신의 고민을 입력하고, 직접 카드를 골라 미래를 점쳐보세요.
          AI 모델이 당신의 상황과 선택한 카드들을 기반으로
          당신에게 꼭 맞는 해석을 제공합니다.
        </Description>
        <UseCaseList>
          <UseCaseItem>
            <Icon>
              <FontAwesomeIcon icon={faRightLeft} />
            </Icon>
            두 가지 선택지를 두고 고민중이신가요?
          </UseCaseItem>
          <UseCaseItem>
            <Icon>
              <FontAwesomeIcon icon={faUsers} />
            </Icon>
            인간관계에서의 방향성을 찾고 싶으신가요?
          </UseCaseItem>
          <UseCaseItem>
            <Icon>
              <FontAwesomeIcon icon={faCalendarDays} />
            </Icon>
            올 한 해의 운세를 점쳐보는 건 어떨까요?
          </UseCaseItem>
        </UseCaseList>
        <BottomDescription>
          상황에 알맞는 스프레드를 선택하여 <br/>더 깊이있고 정확한 해석을 받아보세요.
        </BottomDescription>
      </HeroSection>

      <ActionSection>
        <StartButton onClick={() => navigate('/query')}>
          시작하기
        </StartButton>
      </ActionSection>
    </Container>
  );
}
