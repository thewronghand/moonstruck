import { useLocation } from 'react-router-dom';

import {
  Container,
  Section,
  Title,
  Text
} from './styles/ResultPage.styles';
import SpreadDisplay from '../Components/SpreadDisplay';

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
        <SpreadDisplay cards={drawnCards} revealed={true} />
      </Section>

      <Section>
        <Title>타로 해석</Title>
        <Text>{apiResponse}</Text>
      </Section>
    </Container>
  );
}
