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
import { getCardImageUrl } from '../utils/getCardImageUrl';
import LoadingSpinner from './LoadingSpinner';

const SpreadContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const [revealedCount, setRevealedCount] = useState(0);
  const [cardImages, setCardImages] = useState<Map<number, string>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      setImagesLoaded(false);
      try {
        const imagePromises = cards.map(async card => {
          const url = await getCardImageUrl(card.id);
          return [card.id, url] as const;
        });
        const loadedUrls = await Promise.all(imagePromises);
        setCardImages(new Map(loadedUrls));

        const imageElements = loadedUrls.map(([id, url]) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              if (img.complete && img.naturalWidth > 0) {
                resolve(id);
              } else {
                reject(new Error(`Failed to load image for card ${id}`));
              }
            };
            img.onerror = () => reject(new Error(`Failed to load image for card ${id}`));
            img.src = url;
          });
        });
        
        await Promise.all(imageElements);
        setImagesLoaded(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load card images:', error);
        setIsLoading(false);
        setTimeout(() => loadImages(), 1000);
      }
    };

    loadImages();
  }, [cards]);

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
          cardImages={cardImages}
          revealed={revealed} 
          onReveal={handleCardReveal} 
          visibleCardCount={visibleCardCount} 
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

  if (isLoading || !imagesLoaded) {
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
      {renderSpread()}
    </SpreadContainer>
  );
}
