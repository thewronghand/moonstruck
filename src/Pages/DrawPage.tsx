import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { DrawnTarotCard } from '../Types/tarotCard';
import { drawRandomCards } from '../utils/drawRandomCards';
import { callVertexAPI } from '../api/callVertexApi';
import SpreadDisplay from '../Components/SpreadDisplay';
import DrawPhaseDisplay from '../Components/DrawPhaseDisplay';
import { motion, AnimatePresence } from 'motion/react';
import ShuffleDisplay from '../Components/ShuffleDisplay';
import CutDisplay from '../Components/CutDisplay';
import { saveQuestionReading } from '../api/questionReadingApi';
import type { SpreadType } from '../Types/spread';

// 스타일 컴포넌트
const DrawPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 20px;
`;

const FlavorText = styled.div<{ $visible: boolean }>`
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.5s ease;
  font-size: 1.2rem;
  text-align: center;
  margin: 20px 0;
`;

const AnimatedDrawPhase = styled(motion.div)`
  width: 100%;
`;

type DrawPhase = 'shuffle' | 'cut' | 'draw' | 'reveal';

interface LocationState {
  userInput: string;
  spreadType: SpreadType;
  cardCount: number;
}

export default function DrawPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userInput, spreadType, cardCount } = (location.state || {}) as LocationState;

  const [currentPhase, setCurrentPhase] = useState<DrawPhase>('shuffle');
  const [drawnCards, setDrawnCards] = useState<DrawnTarotCard[]>([]);
  const [selectedCardIndices, setSelectedCardIndices] = useState<number[]>([]);
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [showFlavorText, setShowFlavorText] = useState(false);
  const [readyToNavigate, setReadyToNavigate] = useState(false);
  const hasFetched = useRef(false);
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const [readingId, setReadingId] = useState<string | null>(null);

  // API 요청 및 카드 뽑기 초기화
  useEffect(() => {
    if (!userInput || !spreadType || !cardCount) {
      navigate('/');
      return;
    }

    if (!hasFetched.current) {
      hasFetched.current = true;
      const drawnCardsResult = drawRandomCards(cardCount);
      setDrawnCards(drawnCardsResult);

      (async () => {
        try {
          // 1. 타로 해석 받아오기
          const fetchedApiResponse = await callVertexAPI({
            userInput,
            cards: drawnCards,
            spreadType
          });
          const interpretation = fetchedApiResponse.content?.[0]?.text || '';
          
          // 2. DB에 저장
          const response = await saveQuestionReading({
            question: userInput,
            cards: drawnCards,
            interpretation,
            spreadType
          });
          setApiResponse(interpretation);
          setReadingId(response);
        } catch (error) {
          console.error('API 요청 오류:', error);
          setApiResponse('요청에 실패했습니다.');
        }
      })();
    }
  }, [userInput, spreadType, cardCount, navigate]);

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
    }, 2000);
  };

  // 결과 페이지로 이동
  useEffect(() => {
    if (readyToNavigate && apiResponse && readingId) {
      navigate(`/result/${readingId}`, {
        replace: true,
        state: {
          reading: {
            question: userInput,
            cards: drawnCards,
            interpretation: apiResponse,
            id: readingId,
            spreadType
          }
        }
      });
    }
  }, [readyToNavigate, apiResponse, readingId, navigate, userInput, drawnCards, spreadType]);

  return (
    <DrawPageContainer>
      <AnimatePresence mode="wait">
        {currentPhase === 'shuffle' && (
          <ShuffleDisplay 
            key="shuffle"
            onShuffleComplete={() => handlePhaseChange('cut')} 
          />
        )}

        {currentPhase === 'cut' && (
          <CutDisplay
            key="cut"
            onCutComplete={() => handlePhaseChange('draw')}
          />
        )}

        {currentPhase === 'draw' && (
          <>
            <AnimatePresence>
              {selectedCardIndices.length < cardCount && (
                <AnimatedDrawPhase
                  initial={{ opacity: 1, height: 'auto' }}
                  exit={{ 
                    opacity: 0, 
                    height: 0,
                    transition: {
                      opacity: { duration: 0.5, delay: 0.5 },
                      height: { duration: 0.7, delay: 0.7 }
                    }
                  }}
                >
                  <DrawPhaseDisplay
                    onCardSelect={handleCardSelect}
                    selectedIndices={selectedCardIndices}
                  />
                </AnimatedDrawPhase>
              )}
            </AnimatePresence>
            <SpreadDisplay
              cards={drawnCards}
              spreadType={spreadType}
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
              spreadType={spreadType}
              revealed={true}
              visibleCardCount={cardCount}
              onAllCardsRevealed={handleAllCardsRevealed}
            />
            <FlavorText $visible={showFlavorText}>
              이제 타로가 당신의 운명을 보여줄 것입니다...
            </FlavorText>
          </>
        )}
      </AnimatePresence>
    </DrawPageContainer>
  );
}
