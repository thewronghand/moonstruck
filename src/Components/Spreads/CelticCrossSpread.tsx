import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { CelticCrossContainer, GridContainer } from './styles/CelticCross.styles';

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
  onReveal?: () => void;
  visibleCardCount?: number;
}

export default function CelticCrossSpread({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = 0 
}: SpreadProps) {
  if (cards.length < 10) return null;

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
            <Card card={cards[1]} isRevealed={revealed} onReveal={onReveal} />
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
            <Card card={cards[0]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>

        <div className="below">
          <div style={{ 
            opacity: visibleCardCount > 2 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 2 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[2]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>

        <div className="left">
          <div style={{ 
            opacity: visibleCardCount > 3 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 3 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[3]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>

        <div className="above">
          <div style={{ 
            opacity: visibleCardCount > 4 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 4 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[4]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>

        <div className="right">
          <div style={{ 
            opacity: visibleCardCount > 5 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 5 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[5]} isRevealed={revealed} onReveal={onReveal} />
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
              <Card card={cards[9 - index]} isRevealed={revealed} onReveal={onReveal} />
            </div>
          </div>
        ))}
      </GridContainer>
    </CelticCrossContainer>
  );
}