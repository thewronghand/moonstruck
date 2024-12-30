import { DrawnTarotCard } from '../../Types/tarotCard';
import Card from '../Card';
import { CelticCrossContainer, GridContainer } from './styles/CelticCross.styles';

interface SpreadProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
}

export default function CelticCrossSpread({ cards, revealed = false }: SpreadProps) {
  return (
    <CelticCrossContainer>
      <GridContainer>
        <div className="overlay-card">
          <Card card={cards[0]} isRevealed={revealed} />
        </div>
        <div className="center-cross">
          <Card card={cards[1]} isRevealed={revealed} />
        </div>
        <div className="below">
          <Card card={cards[2]} isRevealed={revealed} />
        </div>
        <div className="left">
          <Card card={cards[3]} isRevealed={revealed} />
        </div>
        <div className="above">
          <Card card={cards[4]} isRevealed={revealed} />
        </div>
        <div className="right">
          <Card card={cards[5]} isRevealed={revealed} />
        </div>
        <div className="staff first">
          <Card card={cards[6]} isRevealed={revealed} />
        </div>
        <div className="staff second">
          <Card card={cards[7]} isRevealed={revealed} />
        </div>
        <div className="staff third">
          <Card card={cards[8]} isRevealed={revealed} />
        </div>
        <div className="staff fourth">
          <Card card={cards[9]} isRevealed={revealed} />
        </div>
      </GridContainer>
    </CelticCrossContainer>
  );
}