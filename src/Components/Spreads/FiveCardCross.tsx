import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { 
  CrossContainer,
  GridContainer 
} from './styles/FiveCardCross.styles'

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
  onReveal?: () => void;
  visibleCardCount?: number;
}

export default function FiveCardCross({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = 0 
}: SpreadProps) {
  if (cards.length < 5) return null;

  return (
    <CrossContainer>
      <GridContainer>
        <div className="empty" />
        <div className="card-slot">
          <div style={{ 
            opacity: visibleCardCount > 4 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 4 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[4]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>
        <div className="empty" />
        
        <div className="card-slot">
          <div style={{ 
            opacity: visibleCardCount > 1 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 1 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[1]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>
        <div className="card-slot">
          <div style={{ 
            opacity: visibleCardCount > 0 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 0 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[0]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>
        <div className="card-slot">
          <div style={{ 
            opacity: visibleCardCount > 2 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 2 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[2]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>
        
        <div className="empty" />
        <div className="card-slot">
          <div style={{ 
            opacity: visibleCardCount > 3 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: visibleCardCount > 3 ? 'auto' : 'none',
            height: '100%'
          }}>
            <Card card={cards[3]} isRevealed={revealed} onReveal={onReveal} />
          </div>
        </div>
        <div className="empty" />
      </GridContainer>
    </CrossContainer>
  );
} 
