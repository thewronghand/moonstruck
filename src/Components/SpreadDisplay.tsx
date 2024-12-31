import { useState } from 'react';
import styled from 'styled-components';
import { DrawnTarotCard } from '../Types/tarotCard';
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
  revealed?: boolean;
  onAllCardsRevealed?: () => void;
  visibleCardCount?: number;
}

export default function SpreadDisplay({ 
  cards, 
  revealed = false,
  onAllCardsRevealed,
  visibleCardCount = 0
}: SpreadDisplayProps) {
  const [revealedCount, setRevealedCount] = useState(0);

  const handleCardReveal = () => {
    const newCount = revealedCount + 1;
    setRevealedCount(newCount);
    
    if (newCount === cards.length && onAllCardsRevealed) {
      onAllCardsRevealed();
    }
  };

  const renderSpread = () => {
    switch (cards.length) {
      case 1:
        return <SingleSpread cards={cards} revealed={revealed} onReveal={handleCardReveal} visibleCardCount={visibleCardCount} />;
      case 3:
        return <TripleSpread cards={cards} revealed={revealed} onReveal={handleCardReveal} visibleCardCount={visibleCardCount} />;
      case 5:
        return <FiveCardCross cards={cards} revealed={revealed} onReveal={handleCardReveal} visibleCardCount={visibleCardCount} />;
      case 10:
        return <CelticCrossSpread cards={cards} revealed={revealed} onReveal={handleCardReveal} visibleCardCount={visibleCardCount} />;
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