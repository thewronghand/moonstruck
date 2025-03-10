import { QuestionReading } from '../Types/tarotReading';
import {
  Section,
  Title,
  Text,
  ModelInfo
} from './styles/ReadingDisplay.styles';
import SpreadDisplay from './SpreadDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

// 타입 정의 추가
interface InterpretationObject {
  content: string;
  title: string;
  model: string;
}

interface QuestionReadingDisplayProps {
  reading: QuestionReading;
}

export default function QuestionReadingDisplay({ reading }: QuestionReadingDisplayProps) {
  // 타입 체크 및 단언
  const isInterpretationObject = 
    typeof reading.interpretation === 'object' && 
    reading.interpretation !== null &&
    'content' in reading.interpretation;
  
  // 객체 형태의 interpretation을 위한 변수
  const interpretationObj = isInterpretationObject 
    ? (reading.interpretation as InterpretationObject) 
    : null;

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
          spreadType={reading.spreadType}
          revealed={true}
          visibleCardCount={reading.cards.length}
          needsLoading={true}
        />
      </Section>

      <Section>
        {isInterpretationObject && interpretationObj && (
          <>
            <Title>{interpretationObj.title}</Title>
            <Text>{interpretationObj.content}</Text>
            <ModelInfo>
              <FontAwesomeIcon icon={faRobot} /> {interpretationObj.model}
            </ModelInfo>
          </>
        )}
        {!isInterpretationObject && (
          <>
            <Title>타로 해석</Title>
            <Text>{reading.interpretation as string}</Text>
          </>
        )}
      </Section>
    </>
  );
} 