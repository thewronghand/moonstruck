import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getQuestionReading } from '../api/questionReadingApi';
import { QuestionReading } from '../Types/tarotReading';
import {
  Container,
  Section,
  Title,
  Text,
  HomeButton,
  ShareSection,
  ShareTitle,
  ShareButton
} from './styles/ResultPage.styles';
import SpreadDisplay from '../Components/SpreadDisplay';

export default function ResultPage() {
  const { readingId } = useParams();
  const navigate = useNavigate();
  const [reading, setReading] = useState<QuestionReading | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const fetchReading = async () => {
      try {
        if (!readingId) throw new Error('Reading ID is required');
        const data = await getQuestionReading(readingId);
        setReading(data);
      } catch (error) {
        console.error('결과 조회 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReading();
  }, [readingId]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('링크 복사 실패:', err);
    }
  };

  if (isLoading) return <p>로딩중...</p>;
  if (!reading) return <p>결과를 찾을 수 없습니다.</p>;

  return (
    <Container>
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

      <ShareSection>
        <ShareTitle>공유하기</ShareTitle>
        <ShareButton onClick={handleCopyLink}>
          {copySuccess ? '링크가 복사되었습니다!' : '링크 복사하기'}
        </ShareButton>
      </ShareSection>

      <HomeButton onClick={() => navigate('/')}>
        홈으로 돌아가기
      </HomeButton>
    </Container>
  );
}
