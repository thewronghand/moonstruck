import { QuestionReading } from '../Types/tarotReading';
import {
  Section,
  Title,
  Text,
} from './styles/ReadingDisplay.styles';
import SpreadDisplay from './SpreadDisplay';

interface QuestionReadingDisplayProps {
  reading: QuestionReading;
}

export default function QuestionReadingDisplay({ reading }: QuestionReadingDisplayProps) {
  return (
    <>
      <Section>
        <Title>사용자 입력</Title>
        <Text>{reading.question}</Text>
      </Section>

      <Section>
        <Title>뽑힌 카드</Title>
        <SpreadDisplay 
          cards={reading.cards} 
          revealed={true}
          visibleCardCount={reading.cards.length}
        />
      </Section>

      <Section>
        <Title>타로 해석</Title>
        <Text>{reading.interpretation}</Text>
      </Section>
    </>
  );
} 