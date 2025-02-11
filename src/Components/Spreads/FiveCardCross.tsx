import styled from 'styled-components';
import Card from '../Card';
import { 
  CrossContainer,
  GridContainer 
} from './styles/FiveCardCross.styles'
import { motion } from 'motion/react';
import { SpreadProps } from '../../Types/spread';

const CardContainer = styled(motion.div)<{ $visibleCardCount: number; $index: number }>`
  pointer-events: ${props => props.$visibleCardCount > props.$index ? 'auto' : 'none'};
  height: 100%;
`;

export default function FiveCardCross({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = 0,
  cardImages
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
        imageUrl={cardImages.get(cards[cardIndex].id) || ''}
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
