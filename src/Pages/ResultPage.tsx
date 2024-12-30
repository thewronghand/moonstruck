import { useLocation } from 'react-router-dom';
import { DrawnTarotCard } from '../Types/tarotCard';
import Card from '../Components/Card';
import {
  Container,
  Section,
  Title,
  CardsContainer,
  Text
} from './styles/ResultPage.styles';

export default function ResultPage() {
  const location = useLocation();
  const { userInput, apiResponse, drawnCards } = location.state || {};

  if (!apiResponse || !drawnCards) {
    return <p>잘못된 접근입니다.</p>;
  }

  return (
    <Container>
      <Section>
        <Title>사용자 입력</Title>
        <Text>{userInput}</Text>
      </Section>

      <Section>
        <Title>뽑힌 카드</Title>
        <CardsContainer>
          {drawnCards.map((card: DrawnTarotCard, index: number) => (
            <Card 
              key={index}
              card={card}
              isRevealed={true}
            />
          ))}
        </CardsContainer>
      </Section>

      <Section>
        <Title>타로 해석</Title>
        <Text>{apiResponse}</Text>
      </Section>
    </Container>
  );
}
