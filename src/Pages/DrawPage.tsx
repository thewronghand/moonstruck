import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { DrawnTarotCard } from '../Types/tarotCard';
import { drawRandomCards } from '../utils/drawRandomCards';
import { formatUserInputAndCardInfo } from '../utils/formatUserInputAndCardInfo';
import { callVertexAPI } from '../api/callVertexApi';
import SpreadDisplay from '../Components/SpreadDisplay';

// 스타일 컴포넌트
const DrawPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 20px;
`;

const PhaseButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 1200px;
`;

const CardButton = styled.button<{ $isSelected: boolean }>`
  aspect-ratio: 1/1.4;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${props => props.$isSelected ? 0.5 : 1};
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const FlavorText = styled.div<{ $visible: boolean }>`
  font-size: 1.2rem;
  color: #2c3e50;
  text-align: center;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.5s ease;
  margin-top: 16px;
  font-style: italic;
`;

type DrawPhase = 'shuffle' | 'cut' | 'draw' | 'reveal';

export default function DrawPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userInput, cardCount } = location.state || {};

  const [currentPhase, setCurrentPhase] = useState<DrawPhase>('shuffle');
  const [drawnCards, setDrawnCards] = useState<DrawnTarotCard[]>([]);
  const [selectedCardIndices, setSelectedCardIndices] = useState<number[]>([]);
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [showFlavorText, setShowFlavorText] = useState(false);
  const [readyToNavigate, setReadyToNavigate] = useState(false);
  const hasFetched = useRef(false);
  const [cardsRevealed, setCardsRevealed] = useState(false);

  // API 요청 및 카드 뽑기 초기화
  useEffect(() => {
    if (!userInput || !cardCount) {
      navigate('/');
      return;
    }

    if (!hasFetched.current) {
      hasFetched.current = true;
      const drawnCardsResult = drawRandomCards(cardCount);
      setDrawnCards(drawnCardsResult);

      (async () => {
        try {
          const formattedQuery = formatUserInputAndCardInfo(userInput, drawnCardsResult);
          const fetchedApiResponse = await callVertexAPI(formattedQuery);
          const responseText = fetchedApiResponse.content?.[0]?.text || '';
          setApiResponse(responseText);
        } catch (error) {
          console.error('API 요청 오류:', error);
          setApiResponse('API 요청에 실패했습니다.');
        }
      })();
    }
  }, [userInput, cardCount, navigate]);

  // 페이즈 전환 핸들러
  const handlePhaseChange = (phase: DrawPhase) => {
    setCurrentPhase(phase);
  };

  // 카드 선택 핸들러
  const handleCardSelect = (index: number) => {
    if (selectedCardIndices.length < cardCount) {
      setSelectedCardIndices(prev => [...prev, index]);
    }
  };

  // 모든 카드가 공개되었을 때 처리
  const handleAllCardsRevealed = () => {
    setShowFlavorText(true);
    setCardsRevealed(true);
    setTimeout(() => {
      setReadyToNavigate(true);
    }, 1000);
  };

  // 결과 페이지로 이동
  useEffect(() => {
    if (readyToNavigate && apiResponse) {
      navigate('/result', { state: { userInput, apiResponse, drawnCards } });
    }
  }, [readyToNavigate, apiResponse, navigate, userInput, drawnCards]);

  return (
    <DrawPageContainer>
      {currentPhase === 'shuffle' && (
        <PhaseButton onClick={() => handlePhaseChange('cut')}>
          카드 섞기
        </PhaseButton>
      )}

      {currentPhase === 'cut' && (
        <PhaseButton onClick={() => handlePhaseChange('draw')}>
          카드 자르기
        </PhaseButton>
      )}

      {currentPhase === 'draw' && (
        <>
          <CardsGrid>
            {Array.from({ length: 78 }, (_, i) => (
              <CardButton
                key={i}
                $isSelected={selectedCardIndices.includes(i)}
                disabled={selectedCardIndices.includes(i)}
                onClick={() => handleCardSelect(i)}
              >
                {i + 1}
              </CardButton>
            ))}
          </CardsGrid>
          <SpreadDisplay
            cards={drawnCards}
            revealed={cardsRevealed}
            onAllCardsRevealed={handleAllCardsRevealed}
            visibleCardCount={selectedCardIndices.length}
          />
          <FlavorText $visible={showFlavorText}>
            이제 타로가 당신의 운명을 보여줄 것입니다...
          </FlavorText>
        </>
      )}

      {currentPhase === 'reveal' && (
        <>
          <SpreadDisplay
            cards={drawnCards}
            revealed={true}
            visibleCardCount={cardCount}
            onAllCardsRevealed={handleAllCardsRevealed}
          />
          <FlavorText $visible={showFlavorText}>
            이제 타로가 당신의 운명을 보여줄 것입니다...
          </FlavorText>
        </>
      )}
    </DrawPageContainer>
  );
}
