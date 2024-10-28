import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpreadSelector from '../Components/SpreadSelector';
import Input from '../Components/Input';

const INITIAL_CARD_COUNT = 1;

export default function QueryPage() {
  const [cardCount, setCardCount] = useState(INITIAL_CARD_COUNT);
  const navigate = useNavigate();

  function handleCardCountChange(newCardCount: number) {
    setCardCount(newCardCount);
  }

  function handleSubmit(userInput: string) {
    navigate('/draw', { state: { userInput, cardCount } });
  }

  return (
    <div>
      <SpreadSelector
        cardCount={cardCount}
        onCardCountChange={handleCardCountChange}
      />
      <Input onFormSubmit={handleSubmit} />
    </div>
  );
}
