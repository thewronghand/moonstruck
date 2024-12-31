import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { SingleSpreadContainer } from './styles/SingleSpread.styles';

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
  onReveal?: () => void;
  visibleCardCount?: number;
}

export default function SingleSpread({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = 0
}: SpreadProps) {
  if (!cards.length) return null;
  
  return (
    <SingleSpreadContainer>
      <div style={{ 
        opacity: visibleCardCount > 0 ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: visibleCardCount > 0 ? 'auto' : 'none',
        height: '100%'
      }}>
        <Card 
          card={cards[0]} 
          isRevealed={revealed} 
          onReveal={onReveal}
        />
      </div>
    </SingleSpreadContainer>
  );
} 