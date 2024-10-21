import { useState } from 'react';
import Input from './Components/Input';
import SpreadSelector from './Components/SpreadSelector';

const INITIAL_CARD_COUNT = 1;

function App() {
  const [cardCount, setCardCount] = useState(INITIAL_CARD_COUNT);

  function handleCardCountChange(newCardCount: number) {
    setCardCount(newCardCount);
  }

  function checkSubmittedForm(inputValue: string) {
    const result = { inputValue, cardCount };
    console.log(result);
  }
  return (
    <>
      <SpreadSelector
        cardCount={cardCount}
        onCardCountChange={handleCardCountChange}
      />
      <Input onFormSubmit={checkSubmittedForm} />
    </>
  );
}

export default App;
