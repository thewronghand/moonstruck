import styled from 'styled-components';
import Card from '../Card';
import { TripleSpreadContainer } from './styles/TripleSpread.styles';
import { motion } from 'motion/react';
import { TripleSpreadProps } from '../../Types/spread';



const CardContainer = styled(motion.div)<{ $visibleCardCount: number; $index: number }>`
  pointer-events: ${props => props.$visibleCardCount > props.$index ? 'auto' : 'none'};
  height: 100%;
`;

export default function TripleSpread({ 
  cards, 
  spreadType,
  revealed = false, 
  onReveal,
  visibleCardCount = 0,
  cardImages
}: TripleSpreadProps) {
  if (!cards.length) return null;

  const orderedCards = spreadType === 'TRIPLE_CHOICE' 
    ? [cards[1], cards[0], cards[2]]
    : cards.slice(0, 3);

  return (
    <TripleSpreadContainer>
      {orderedCards.map((card, index) => (
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
            imageUrl={cardImages.get(card.id) || ''}
          />
        </CardContainer>
      ))}
    </TripleSpreadContainer>
  );
} 