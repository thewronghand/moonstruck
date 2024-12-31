import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { 
  TripleSpreadContainer,
  CardsRow 
} from './styles/TripleSpread.styles';

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
  onReveal?: () => void;
  visibleCardCount?: number;
}

export default function TripleSpread({ 
  cards, 
  revealed = false, 
  onReveal,
  visibleCardCount = cards.length 
}: SpreadProps) {
  return (
    <TripleSpreadContainer>
      <CardsRow>
        {cards.map((card, index) => (
          <div 
            key={index}
            style={{ 
              opacity: index < visibleCardCount ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: index < visibleCardCount ? 'auto' : 'none'
            }}
          >
            <Card 
              card={card}
              isRevealed={revealed}
              onReveal={onReveal}
            />
          </div>
        ))}
      </CardsRow>
    </TripleSpreadContainer>
  );
} 