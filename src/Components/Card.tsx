import { useState } from 'react';
import { DrawnTarotCard } from '../Types/tarotCard';
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  CardName
} from './styles/Card.styles';

interface CardProps {
  card: DrawnTarotCard;
  imageUrl: string;
  isRevealed?: boolean;
  onReveal?: () => void;
}

export default function Card({ 
  card, 
  imageUrl,
  isRevealed = false, 
  onReveal 
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(isRevealed);
  const isReversed = card.direction === '역방향';

  const handleClick = () => {
    if (!isFlipped && onReveal) {
      onReveal();
    }
    setIsFlipped(true);
  };

  return (
    <CardContainer $isFlipped={isFlipped} onClick={handleClick}>
      <CardInner $isFlipped={isFlipped}>
        <CardBack>
          <img 
            src="/cards/default/back.webp" 
            alt="Card Back"
          />
        </CardBack>
        <CardFront $isReversed={isReversed}>
          <img 
            src={imageUrl}
            alt={card.name.ko}
          />
          <CardName>
            <div>{card.name.ko}</div>
            {isReversed && <div>(역방향)</div>}
          </CardName>
        </CardFront>
      </CardInner>
    </CardContainer>
  );
}
