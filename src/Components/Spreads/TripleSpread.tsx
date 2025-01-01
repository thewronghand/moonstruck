import styled from 'styled-components';
import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { TripleSpreadContainer } from './styles/TripleSpread.styles';
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

export default function TripleSpread({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = 0
}: SpreadProps) {
  if (!cards.length) return null;

  return (
    <TripleSpreadContainer>
      {cards.slice(0, 3).map((card, index) => (
        <CardContainer 
          key={index}
          $visibleCardCount={visibleCardCount}
          $index={index}
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: visibleCardCount > index ? 0 : -50,
            opacity: visibleCardCount > index ? 1 : 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <Card 
            card={card} 
            isRevealed={revealed} 
            onReveal={onReveal}
          />
        </CardContainer>
      ))}
    </TripleSpreadContainer>
  );
} 