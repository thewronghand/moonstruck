import { DrawnTarotCard } from '../Types/tarotCard';
import { formatDrawnCards } from './formatDrawnCards';

export function formatUserInputAndCardInfo(
  userInput: string,
  drawnCards: DrawnTarotCard[]
) {
  const formattedCardInfo = formatDrawnCards(drawnCards);
  return `## 사용자 입력값\n\n${userInput}\n\n## 사용자가 뽑은 카드 정보\n\n${formattedCardInfo}`;
}
