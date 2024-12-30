import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { 
  CrossContainer,
  GridContainer 
} from './styles/FiveCardCross.styles'

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
}

export default function FiveCardCross({ cards, revealed = false }: SpreadProps) {
  return (
    <CrossContainer>
      <GridContainer>
        <div className="empty" />
        <div className="card-slot">
          <Card card={cards[3]} isRevealed={revealed} />
        </div>
        <div className="empty" />
        
        <div className="card-slot">
          <Card card={cards[0]} isRevealed={revealed} />
        </div>
        <div className="card-slot">
          <Card card={cards[1]} isRevealed={revealed} />
        </div>
        <div className="card-slot">
          <Card card={cards[2]} isRevealed={revealed} />
        </div>
        
        <div className="empty" />
        <div className="card-slot">
          <Card card={cards[4]} isRevealed={revealed} />
        </div>
        <div className="empty" />
      </GridContainer>
    </CrossContainer>
  );
} 
