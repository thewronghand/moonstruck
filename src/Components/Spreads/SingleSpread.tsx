import styled from 'styled-components';
import Card from '../Card';
import { SingleSpreadContainer } from './styles/SingleSpread.styles';
import { motion } from 'motion/react';
import { SpreadProps } from '../../Types/spread';

const CardContainer = styled(motion.div)<{ $visibleCardCount: number; $index: number }>`
  pointer-events: ${props => props.$visibleCardCount > props.$index ? 'auto' : 'none'};
  height: 100%;
`;

export default function SingleSpread({ 
  cards, 
  cardImages,
  revealed = false, 
  onReveal,
  visibleCardCount = 0
}: SpreadProps) {
  if (!cards.length) return null;
  
  return (
    <SingleSpreadContainer>
      <CardContainer 
        $visibleCardCount={visibleCardCount}
        $index={0}
        initial={{ y: -50, opacity: 0 }}
        animate={{ 
          y: visibleCardCount > 0 ? 0 : -50,
          opacity: visibleCardCount > 0 ? 1 : 0
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <Card 
          card={cards[0]} 
          isRevealed={revealed} 
          onReveal={onReveal}
          imageUrl={cardImages.get(cards[0].id) || ''}
        />
      </CardContainer>
    </SingleSpreadContainer>
  );
} 