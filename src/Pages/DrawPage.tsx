import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DrawnTarotCard } from '../Types/types';
import { drawRandomCards } from '../utils/drawRandomCards';
import { formatUserInputAndCardInfo } from '../utils/formatUserInputAndCardInfo';
import { callVertexAPI } from '../api/api';

export default function DrawPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userInput, cardCount } = location.state || {};

  const [drawnCards, setDrawnCards] = useState<DrawnTarotCard[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  useEffect(() => {
    console.log(userInput);
    console.log(cardCount);
    if (!userInput || !cardCount) {
      navigate('/');
      return;
    }

    const drawnCardsResult = drawRandomCards(cardCount);
    setDrawnCards(drawnCardsResult);
    const formattedQuery = formatUserInputAndCardInfo(
      userInput,
      drawnCardsResult
    );

    (async () => {
      try {
        const fetchedApiResponse = await callVertexAPI(formattedQuery);
        const responseText = fetchedApiResponse.content?.[0]?.text || '';
        setApiResponse(responseText);
      } catch (error) {
        console.error('API 요청 오류:', error);
        setApiResponse('API 요청에 실패했습니다.');
      }
    })();
  }, [userInput, cardCount, navigate]);

  // 버튼 클릭으로 애니메이션 중단
  const handleButtonClick = () => {
    setIsAnimating(false);
  };

  // 애니메이션이 중단되고 API 응답이 완료되면 ResultPage로 이동
  useEffect(() => {
    if (!isAnimating && apiResponse) {
      navigate('/result', { state: { apiResponse, drawnCards } });
    }
  }, [isAnimating, apiResponse, navigate, drawnCards]);

  return (
    <div>
      <h2>카드를 선택해 주세요</h2>
      {isAnimating ? (
        <>
          <p>카드를 섞고 있습니다...</p>
          <button onClick={handleButtonClick}>카드 선택하기</button>
        </>
      ) : (
        <p>카드가 선택되었습니다. 결과를 해석 중입니다...</p>
      )}
    </div>
  );
}
