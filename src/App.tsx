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
    console.log(inputValue);
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
