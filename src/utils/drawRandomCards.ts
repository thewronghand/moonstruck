import { random, shuffle } from 'es-toolkit';
import { tarotDeck } from '../data/tarotDeck';
import { TarotCard } from '../Types/types';

export function drawRandomCards(cardCount: number) {
  const shuffledDeck = shuffle([...tarotDeck]);

  const result = shuffledDeck
    .slice(0, cardCount)
    .map((card) => processCardDirection(card));
  return result;
}

function processCardDirection(card: TarotCard) {
  const direction: '정방향' | '역방향' =
    random(0, 1) > 0.5 ? '정방향' : '역방향';

  const result = {
    id: card.id,
    name: card.name,
    arcanaType: card.arcanaType,
    suit: card.suit,
    number: card.number,
    direction,
    keywords:
      direction === '정방향' ? card.upright.keywords : card.reversed.keywords,
    description:
      direction === '정방향'
        ? card.upright.description
        : card.reversed.description,
  };
  return result;
}
