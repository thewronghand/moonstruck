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
  isRevealed?: boolean;
  onReveal?: () => void;
}

export default function Card({ card, isRevealed = false, onReveal }: CardProps) {
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
            loading="lazy"
          />
        </CardBack>
        <CardFront $isReversed={isReversed}>
          <img 
            src={`/cards/default/${card.id}.webp`} 
            alt={card.name.ko}
            loading="lazy"
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
