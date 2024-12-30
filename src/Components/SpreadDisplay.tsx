import { DrawnTarotCard } from '../Types/tarotCard';
import {
  SingleSpread,
  TripleSpread,
  FiveCardSpread,
  CelticCrossSpread
} from './Spreads';

interface SpreadDisplayProps {
  cards: DrawnTarotCard[];
  revealed?: boolean;
}

export default function SpreadDisplay({ cards, revealed = false }: SpreadDisplayProps) {
  switch (cards.length) {
    case 1:
      return <SingleSpread cards={cards} revealed={revealed} />;
    case 3:
      return <TripleSpread cards={cards} revealed={revealed} />;
    case 5:
      return <FiveCardSpread cards={cards} revealed={revealed} />;
    case 10:
      return <CelticCrossSpread cards={cards} revealed={revealed} />;
    default:
      return <div>지원하지 않는 스프레드입니다.</div>;
  }
}