import { DrawnTarotCard } from '../Types/tarotCard';

export function formatDrawnCards(cards: DrawnTarotCard[]): string {
  return cards
    .map((card, idx) => {
      return `- ${idx + 1}: ${JSON.stringify(card)}`;
    })
    .join('\n');
}
