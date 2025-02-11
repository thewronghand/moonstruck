import { useState } from 'react';
import { DrawnTarotCard } from '../Types/tarotCard';
import { SpreadType } from '../Types/spread';
import {
  SingleSpread,
  TripleSpread,
  FiveCardCross,
  CelticCrossSpread
} from './Spreads';
import { SpreadContainer, LoaderContainer, ErrorMessage } from './styles/SpreadDisplay.styles';
import LoadingSpinner from './LoadingSpinner';
import { useCardImages } from '../utils/hooks/useCardImages';

interface SpreadDisplayProps {
  cards: DrawnTarotCard[];
  spreadType: SpreadType;
  revealed?: boolean;
  onAllCardsRevealed?: () => void;
  visibleCardCount?: number;
  needsLoading?: boolean;
}

export default function SpreadDisplay({ 
  cards, 
  spreadType,
  revealed, 
  onAllCardsRevealed, 
  visibleCardCount = 0,
  needsLoading = false 
}: SpreadDisplayProps) {
  const [revealedCount, setRevealedCount] = useState(0);
  const { cardImages, isLoading, isError } = useCardImages(cards, needsLoading);

  const handleCardReveal = () => {
    const newCount = revealedCount + 1;
    setRevealedCount(newCount);
    
    if (newCount === cards.length) {
      onAllCardsRevealed?.();
    }
  };

  const renderSpread = (cardImages: Map<number, string> = new Map()) => {
    switch (spreadType) {
      case 'SINGLE':
        return <SingleSpread 
          cards={cards} 
          revealed={revealed} 
          onReveal={handleCardReveal} 
          visibleCardCount={visibleCardCount}
          cardImages={cardImages}
        />;
      case 'TRIPLE_TIMELINE':
      case 'TRIPLE_CHOICE':
        return <TripleSpread 
          cards={cards} 
          cardImages={cardImages}
          spreadType={spreadType}
          revealed={revealed} 
          visibleCardCount={visibleCardCount}
          onReveal={handleCardReveal} 
        />;
      case 'FIVE_CARD_CROSS':
        return <FiveCardCross 
          cards={cards} 
          cardImages={cardImages}
          revealed={revealed} 
          visibleCardCount={visibleCardCount}
          onReveal={handleCardReveal} 
        />;
      case 'CELTIC_CROSS':
        return <CelticCrossSpread 
          cards={cards} 
          cardImages={cardImages}
          revealed={revealed} 
          visibleCardCount={visibleCardCount}
          onReveal={handleCardReveal} 
        />;
      default:
        return null;
    }
  };

  if (isError) {
    return (
      <SpreadContainer>
        <LoaderContainer>
          <ErrorMessage>이미지를 불러오는데 실패했습니다.</ErrorMessage>
        </LoaderContainer>
      </SpreadContainer>
    );
  }

  if (needsLoading && isLoading) {
    return (
      <SpreadContainer>
        <LoaderContainer>
          <LoadingSpinner />
        </LoaderContainer>
      </SpreadContainer>
    );
  }

  return (
    <SpreadContainer>
      {renderSpread(cardImages)}
    </SpreadContainer>
  );
}
