import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getQuestionReading } from '../api/questionReadingApi';
import { QuestionReading } from '../Types/tarotReading';
import QuestionReadingDisplay from '../Components/QuestionReadingDisplay';
import {
  Container,
  HomeButton,
  ShareSection,
  ShareTitle,
  ShareButton
} from './styles/ResultPage.styles';
import LoadingSpinner from '../Components/LoadingSpinner';

export default function ResultPage() {
  const { readingId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // location.state에서 reading 데이터를 받거나, 없으면 null로 초기화
  const [reading, setReading] = useState<QuestionReading | null>(
    location.state?.reading || null
  );
  const [isLoading, setIsLoading] = useState(!location.state?.reading);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // state로 받은 데이터가 없고 readingId가 있을 때만 DB 조회
    if (!reading && readingId) {
      const fetchReading = async () => {
        try {
          const data = await getQuestionReading(readingId);
          setReading(data);
        } catch (error) {
          console.error('결과 조회 실패:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchReading();
    }
  }, [readingId, reading]);

  const handleCopyLink = async () => {
    try {
      // share 페이지 URL 생성
      const shareUrl = `${window.location.origin}/share/${readingId}`;
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('링크 복사 실패:', err);
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (!reading) return <p>결과를 찾을 수 없습니다.</p>;

  return (
    <Container>
      <QuestionReadingDisplay reading={reading} />
      
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
