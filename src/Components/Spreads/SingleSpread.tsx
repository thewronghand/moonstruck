import styled from 'styled-components';
import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { SingleSpreadContainer } from './styles/SingleSpread.styles';
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

export default function SingleSpread({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = 0
}: SpreadProps) {
  if (!cards.length) return null;
  
  return (
    <SingleSpreadContainer>
      <CardContainer 
        $visibleCardCount={visibleCardCount}
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
        />
      </CardContainer>
    </SingleSpreadContainer>
  );
} 