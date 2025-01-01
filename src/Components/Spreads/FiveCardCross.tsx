import styled from 'styled-components';
import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { 
  CrossContainer,
  GridContainer 
} from './styles/FiveCardCross.styles'
import { motion } from 'motion/react';

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
  onReveal?: () => void;
  visibleCardCount?: number;
}

const CardContainer = styled(motion.div)<{ $visibleCardCount: number; $index: number }>`
  pointer-events: ${props => props.$visibleCardCount > props.$index ? 'auto' : 'none'};
  height: 100%;
`;

export default function FiveCardCross({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = 0 
}: SpreadProps) {
  if (cards.length < 5) return null;

  const renderCard = (cardIndex: number) => (
    <CardContainer
      $visibleCardCount={visibleCardCount}
      $index={cardIndex}
      initial={{ y: -50, opacity: 0 }}
      animate={{ 
        y: visibleCardCount > cardIndex ? 0 : -50,
        opacity: visibleCardCount > cardIndex ? 1 : 0
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <Card 
        card={cards[cardIndex]} 
        isRevealed={revealed} 
        onReveal={onReveal}
      />
    </CardContainer>
  );

  return (
    <CrossContainer>
      <GridContainer>
        <div className="empty" />
        <div className="card-slot">
          {renderCard(4)}
        </div>
        <div className="empty" />
        
        <div className="card-slot">
          {renderCard(1)}
        </div>
        <div className="card-slot">
          {renderCard(0)}
        </div>
        <div className="card-slot">
          {renderCard(2)}
        </div>
        
        <div className="empty" />
        <div className="card-slot">
          {renderCard(3)}
        </div>
        <div className="empty" />
      </GridContainer>
    </CrossContainer>
  );
} 
