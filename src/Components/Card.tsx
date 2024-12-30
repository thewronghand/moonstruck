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
  
  const handleClick = () => {
    if (!isRevealed && onReveal) {
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
        <CardFront>
          <img 
            src={`/cards/default/${card.id}.webp`} 
            alt={card.name.ko}
            loading="lazy"
          />
          <CardName>{card.name.ko}</CardName>
        </CardFront>
      </CardInner>
    </CardContainer>
  );
}
