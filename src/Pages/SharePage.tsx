import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getQuestionReading } from '../api/questionReadingApi';
import { QuestionReading } from '../Types/tarotReading';
import QuestionReadingDisplay from '../Components/QuestionReadingDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  TryButton,
  AnimatedIcon
} from './styles/SharePage.styles';
import LoadingSpinner from '../Components/LoadingSpinner';

export default function SharePage() {
  const { readingId } = useParams();
  const navigate = useNavigate();
  const [reading, setReading] = useState<QuestionReading | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) return <LoadingSpinner />;
  if (!reading) return <p>결과를 찾을 수 없습니다.</p>;

  return (
    <Container>
      <QuestionReadingDisplay reading={reading} />
      <TryButton onClick={() => navigate('/')}>
        <AnimatedIcon
          animate={{
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faWandSparkles} />
        </AnimatedIcon>
        나도 타로점 쳐보기
      </TryButton>
    </Container>
  );
} 