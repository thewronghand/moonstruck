import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { 
  TripleSpreadContainer,
  CardsRow 
} from './styles/TripleSpread.styles';

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
}

export default function TripleSpread({ cards, revealed = false }: SpreadProps) {
  return (
    <TripleSpreadContainer>
      <CardsRow>
        {cards.map((card, index) => (
          <Card 
            key={index}
            card={card}
            isRevealed={revealed}
          />
        ))}
      </CardsRow>
    </TripleSpreadContainer>
  );
} 