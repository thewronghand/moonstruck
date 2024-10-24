import { useState } from 'react';
import Input from './Components/Input';
import SpreadSelector from './Components/SpreadSelector';
import { drawRandomCards } from './utils/drawRandomCards';
import { DrawnTarotCard } from './Types/types';
import { formatUserInputAndCardInfo } from './utils/formatUserInputAndCardInfo';
import { callVertexAPI } from './api/api';

const INITIAL_CARD_COUNT = 1;

function App() {
  const [cardCount, setCardCount] = useState(INITIAL_CARD_COUNT);
  const [drawnCards, setDrawnCards] = useState<DrawnTarotCard[]>([]);

  function handleCardCountChange(newCardCount: number) {
    setCardCount(newCardCount);
  }

  async function checkSubmittedForm(inputValue: string) {
    const drawnCardsResult = drawRandomCards(cardCount);
    setDrawnCards(drawnCardsResult);
    const formattedInput = formatUserInputAndCardInfo(inputValue, drawnCards);
    console.log(prompt);
    const result = await callVertexAPI(formattedInput);
    console.log(result);
  }
  return (
    <>
      <SpreadSelector
        cardCount={cardCount}
        onCardCountChange={handleCardCountChange}
      />
      <Input onFormSubmit={checkSubmittedForm} />
      <div>
        <h2>결과</h2>
        <div>
          <h3>뽑힌 카드</h3>
          <ul>
            {drawnCards.map((card, index) => (
              <li key={index}>
                <h4>
                  {card.name.en} ({card.name.ko})
                </h4>
                <p>
                  {card.direction}: {card.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
