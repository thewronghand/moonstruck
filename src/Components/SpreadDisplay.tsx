import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DrawnTarotCard } from '../Types/tarotCard';
import { SpreadType } from '../Types/spread';
import {
  SingleSpread,
  TripleSpread,
  FiveCardCross,
  CelticCrossSpread
} from './Spreads';

const SpreadContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

interface SpreadDisplayProps {
  cards: DrawnTarotCard[];
  spreadType: SpreadType;
  revealed?: boolean;
  onAllCardsRevealed?: () => void;
  visibleCardCount?: number;
}

export default function SpreadDisplay({ 
  cards, 
  spreadType,
  revealed, 
  onAllCardsRevealed, 
  visibleCardCount = 0 
}: SpreadDisplayProps) {
  const [delayedVisibleCount, setDelayedVisibleCount] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (visibleCardCount > delayedVisibleCount) {
      const timer = setTimeout(() => {
        setDelayedVisibleCount(visibleCardCount);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setDelayedVisibleCount(visibleCardCount);
    }
  }, [visibleCardCount]);

  const handleCardReveal = () => {
    const newCount = revealedCount + 1;
    setRevealedCount(newCount);
    
    if (newCount === cards.length) {
      onAllCardsRevealed?.();
    }
  };

  const renderSpread = () => {
    switch (spreadType) {
      case 'SINGLE':
        return <SingleSpread 
          cards={cards} 
          revealed={revealed} 
          onReveal={handleCardReveal} 
          visibleCardCount={delayedVisibleCount} 
        />;
      case 'TRIPLE_TIMELINE':
      case 'TRIPLE_CHOICE':
        return <TripleSpread 
          cards={cards} 
          spreadType={spreadType}
          revealed={revealed} 
          visibleCardCount={delayedVisibleCount}
          onReveal={handleCardReveal} 
        />;
      case 'FIVE_CARD_CROSS':
        return <FiveCardCross 
          cards={cards} 
          revealed={revealed} 
          visibleCardCount={delayedVisibleCount}
          onReveal={handleCardReveal} 
        />;
      case 'CELTIC_CROSS':
        return <CelticCrossSpread 
          cards={cards} 
          revealed={revealed} 
          visibleCardCount={delayedVisibleCount}
          onReveal={handleCardReveal} 
        />;
      default:
        return null;
    }
  };

  return (
    <SpreadContainer>
      {renderSpread()}
    </SpreadContainer>
  );
}