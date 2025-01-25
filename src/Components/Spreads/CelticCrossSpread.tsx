import Card from '../Card';
import { CelticCrossContainer, GridContainer } from './styles/CelticCross.styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SpreadProps } from '../../Types/spread';


const CardContainer = styled(motion.div)<{ $visibleCardCount: number; $index: number }>`
  pointer-events: ${props => props.$visibleCardCount > props.$index ? 'auto' : 'none'};
  height: 100%;
`;

export default function CelticCrossSpread({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = 0,
  cardImages
}: SpreadProps) {
  if (cards.length < 10) return null;

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
    <CelticCrossContainer>
      <GridContainer>
        <div className="overlay-card">
          <div style={{ 
            opacity: visibleCardCount > 1 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 1 ? 'auto' : 'none',
            height: '100%',
            zIndex: 2
          }}>
            {renderCard(1)}
          </div>
        </div>

        <div className="center-cross">
          <div style={{ 
            opacity: visibleCardCount > 0 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 0 ? 'auto' : 'none',
            height: '100%',
            zIndex: 1
          }}>
            {renderCard(0)}
          </div>
        </div>

        <div className="below">
          <div style={{ 
            opacity: visibleCardCount > 2 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 2 ? 'auto' : 'none',
            height: '100%'
          }}>
            {renderCard(2)}
          </div>
        </div>

        <div className="left">
          <div style={{ 
            opacity: visibleCardCount > 3 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 3 ? 'auto' : 'none',
            height: '100%'
          }}>
            {renderCard(3)}
          </div>
        </div>

        <div className="above">
          <div style={{ 
            opacity: visibleCardCount > 4 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 4 ? 'auto' : 'none',
            height: '100%'
          }}>
            {renderCard(4)}
          </div>
        </div>

        <div className="right">
          <div style={{ 
            opacity: visibleCardCount > 5 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 5 ? 'auto' : 'none',
            height: '100%'
          }}>
            {renderCard(5)}
          </div>
        </div>

        {['first', 'second', 'third', 'fourth'].map((position, index) => (
          <div key={index} className={`staff ${position}`}>
            <div style={{ 
              opacity: visibleCardCount > (9 - index) ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: visibleCardCount > (9 - index) ? 'auto' : 'none',
              height: '100%'
            }}>
              {renderCard(9 - index)}
            </div>
          </div>
        ))}
      </GridContainer>
    </CelticCrossContainer>
  );
}