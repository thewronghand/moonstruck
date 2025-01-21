import { useState } from 'react';
import styled from 'styled-components';
import { DrawnTarotCard } from '../Types/tarotCard';
import { drawRandomCards } from '../utils/drawRandomCards';
import SpreadDisplay from '../Components/SpreadDisplay';
import SpreadSelector from '../Components/SpreadSelector';
import DrawPhaseDisplay from '../Components/DrawPhaseDisplay';
import { motion, AnimatePresence } from 'motion/react';
import ShuffleDisplay from '../Components/ShuffleDisplay';

const TestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 20px;
`;

const StartButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: #007bff;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

// const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(13, 1fr);
//   gap: 8px;
//   width: 100%;
//   max-width: 1200px;
// `;

// const CardButton = styled.button<{ $isSelected: boolean }>`
//   aspect-ratio: 1/1.4;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   cursor: pointer;
//   opacity: ${props => props.$isSelected ? 0.5 : 1};
  
//   &:disabled {
//     cursor: not-allowed;
//   }
// `;

const CardInfo = styled.div`
  width: 100%;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 16px;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-all;
`;

const AnimatedDrawPhase = styled(motion.div)`
  width: 100%;
  margin-bottom: 32px;
`;

const AnimatedSpread = styled(motion.div)`
  width: 100%;
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;
  animation-delay: 0.3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function DrawTestPage() {
  const [cardCount, setCardCount] = useState(1);
  const [drawnCards, setDrawnCards] = useState<DrawnTarotCard[]>([]);
  const [selectedCardIndices, setSelectedCardIndices] = useState<number[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showShuffle, setShowShuffle] = useState(false);
  const [isShuffleExiting, setIsShuffleExiting] = useState(false);

  const handleCardCountChange = (newCardCount: number) => {
    setCardCount(newCardCount);
    setSelectedCardIndices([]);
    setIsDrawing(false);
    const cards = drawRandomCards(newCardCount);
    setDrawnCards(cards);
  };

  const handleStartDrawing = () => {
    setIsDrawing(true);
  };

  const handleCardSelect = (index: number) => {
    if (selectedCardIndices.length < cardCount) {
      setSelectedCardIndices(prev => [...prev, index]);
    }
  };

  const handleAllCardsRevealed = () => {
    console.log('All cards revealed!');
  };

  const handleShuffleComplete = () => {
    console.log("Shuffle completed!");
    setIsShuffleExiting(true);
    setTimeout(() => {
      setShowShuffle(false);
      setIsShuffleExiting(false);
    }, 1000);
  };

  return (
    <TestPageContainer>
      <button onClick={() => setShowShuffle(!showShuffle)} disabled={isShuffleExiting}>
        {showShuffle ? 'Hide Shuffle' : 'Show Shuffle'}
      </button>

      <AnimatePresence mode="wait">
        {showShuffle && (
          <ShuffleDisplay 
            key="shuffle"
            onShuffleComplete={handleShuffleComplete} 
          />
        )}
        {!showShuffle && !isShuffleExiting && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {drawnCards.length > 0 && (
              <CardInfo>
                {drawnCards.map((card, index) => (
                  <div key={index}>
                    {index + 1}번 카드: {card.name.ko} ({card.direction})
                  </div>
                ))}
              </CardInfo>
            )}
            
            {!isDrawing ? (
              <>
                <SpreadSelector
                  cardCount={cardCount}
                  onCardCountChange={handleCardCountChange}
                />
                {drawnCards.length > 0 && (
                  <StartButton onClick={handleStartDrawing}>
                    카드 뽑기 시작
                  </StartButton>
                )}
              </>
            ) : (
              <>
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
                <AnimatedSpread>
                  <SpreadDisplay
                    cards={drawnCards}
                    revealed={false}
                    onAllCardsRevealed={handleAllCardsRevealed}
                    visibleCardCount={selectedCardIndices.length}
                  />
                </AnimatedSpread>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </TestPageContainer>
  );
} 