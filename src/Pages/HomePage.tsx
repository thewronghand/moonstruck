import { useNavigate } from 'react-router-dom';
import { Container, Header, Logo, ServiceGrid, ServiceCard } from './styles/HomePage.styles';

export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Header>
        <Logo src="/logo-typo.png" alt="Moonstruck" />
      </Header>
      
      <ServiceGrid>
        <ServiceCard onClick={() => navigate('/query')}>
          <h2>타로 상담</h2>
          <p>당신의 고민을 입력하고 타로 카드로 점쳐보세요</p>
        </ServiceCard>
        
        <ServiceCard onClick={() => navigate('/daily')}>
          <h2>오늘의 운세</h2>
          <p>오늘 하루의 운세를 확인해보세요</p>
        </ServiceCard>
        
        {/* 추가 기능들을 위한 카드 */}
      </ServiceGrid>
    </Container>
  );
}
