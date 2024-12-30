import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { SingleSpreadContainer } from './styles/SingleSpread.styles';

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
}

export default function SingleSpread({ cards, revealed = false }: SpreadProps) {
  return (
    <SingleSpreadContainer>
      <Card card={cards[0]} isRevealed={revealed} />
    </SingleSpreadContainer>
  );
} 